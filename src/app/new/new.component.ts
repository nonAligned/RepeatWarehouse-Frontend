import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'repeat-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  formType: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
