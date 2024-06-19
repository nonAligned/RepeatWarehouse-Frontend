import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Consumable } from 'src/app/models/consumable.model';
import { RepeatService } from 'src/app/services/repeat.service';

@Component({
  selector: 'repeat-consumable-form',
  templateUrl: './consumable-form.component.html',
  styleUrls: ['./consumable-form.component.scss']
})
export class ConsumableFormComponent implements OnInit {
  consumableForm: UntypedFormGroup;
  consumable: Consumable;

  constructor(private fb: UntypedFormBuilder, private service: RepeatService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.consumableForm = this.fb.group({
      name: ['', Validators.required],
      purchase_price: [null, [Validators.required, Validators.min(0)]],
      quantity: [1, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    let submittedConsumable = new Consumable(this.consumableForm.value);
    this.service.addConsumable(submittedConsumable).subscribe(data => {
      this.consumableForm.reset();
    });
  }

}
