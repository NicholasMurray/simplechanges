import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  errorState = false;
  hasDateError = false;

  constructor() { }

  ngOnInit() {
  }

  toggleErrorState() {
    // alert('changeErrorState');
    this.errorState = !this.errorState;
  }

  onDateInputErrorOcurred(event) {
    this.hasDateError = event;
  }

}
