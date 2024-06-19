import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { OtherExpense } from 'src/app/models/otherExpense.model';
import { RepeatService } from 'src/app/services/repeat.service';

@Component({
  selector: 'repeat-other-form',
  templateUrl: './other-form.component.html',
  styleUrls: ['./other-form.component.scss']
})
export class OtherFormComponent implements OnInit {
  otherForm: UntypedFormGroup;
  other: OtherExpense;

  constructor(private fb: UntypedFormBuilder, private service: RepeatService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.otherForm = this.fb.group({
      name: ['', Validators.required],
      cost: [null, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    let submittedExpense = new OtherExpense(this.otherForm.value);
    this.service.addOtherExpense(submittedExpense).subscribe(data => {
      this.otherForm.reset();
    });
  }

}
