import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Marketing } from 'src/app/models/marketing.model';
import { RepeatService } from 'src/app/services/repeat.service';

@Component({
  selector: 'repeat-marketing-form',
  templateUrl: './marketing-form.component.html',
  styleUrls: ['./marketing-form.component.scss']
})
export class MarketingFormComponent implements OnInit {
  marketingForm: UntypedFormGroup;
  marketing: Marketing;

  constructor(private fb: UntypedFormBuilder, private service: RepeatService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.marketingForm = this.fb.group({
      cost: [null, [Validators.required, Validators.min(0)]],
      type: ["", Validators.required],
      target_audience: ["", Validators.required],
      age_group: ["", Validators.required],
      platform: ["", Validators.required]
    });
  }

  onSubmit() {
    let submittedMarketing = new Marketing(this.marketingForm.value);
    this.service.addMarketing(submittedMarketing).subscribe(data => {
      this.marketingForm.reset();
    });
  }

}
