import { Component, EventEmitter,
        OnInit, Input, Output,
        OnChanges, SimpleChanges
      } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnChanges {

  @Input() DateInputError = false;
  @Output() DateInputErrorOcurred: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('DateInputError=' + this.DateInputError);
    this.DateInputErrorOcurred.emit(this.DateInputError);
  }

}
