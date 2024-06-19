import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { RepeatService } from 'src/app/services/repeat.service';

@Component({
  selector: 'repeat-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  itemForm: UntypedFormGroup;
  item: Item;

  constructor(
    private fb: UntypedFormBuilder, 
    private service: RepeatService, 
    private route: ActivatedRoute,
    private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.get('id')) {
        let id = params.get('id');
        this.service.getItemById(id).subscribe(data => {
          this.item = data;
          if (this.item.purchase_price == null) {
            this.item.purchase_price = 0;
          }
          this.itemForm.patchValue(this.item);
        });
      } else {
        this.item = new Item();
      }
    });
  }

  createForm() {
    this.itemForm = this.fb.group({
      type: ['', Validators.required],
      gender: ['', Validators.required],
      size: [''],
      shoulder_width: [0, [Validators.min(0)]],
      waist_width: [0, [Validators.min(0)]],
      hip_width: [0, [Validators.min(0)]],
      leg_width: [0, [Validators.min(0)]],
      total_width: [0, [Validators.min(0)]],
      sleeve_length: [0, [Validators.min(0)]],
      total_length: [0, [Validators.min(0)]],
      color: [[], Validators.required],
      description: ['', Validators.required],
      material: ['', Validators.required],
      purchase_price: [0, [Validators.required, Validators.min(0)]],
      retail_price: [0, [Validators.required, Validators.min(0)]],
      condition: ['', Validators.required],
      photo: ['', Validators.required],
      sold: [false],
      donated: [false],
      active: [false],
      stored: [false]
    });
  }

  onSubmit() {
    if (this.item._id) {
      let editedItem = new Item(this.itemForm.value);
      editedItem._id = this.item._id;
      this.service.editItem(editedItem).subscribe(data => {
        this.router.navigate([`warehouse/item/${this.item._id}`]);
      });
    } else {
      let submittedItem = new Item(this.itemForm.value);
      submittedItem.stored = true;
      // submittedItem.entry_date = Date.now().toLocaleString();
      this.service.addItem(submittedItem).subscribe(data => {
        this.itemForm.reset();
      });
    }
  }

}
