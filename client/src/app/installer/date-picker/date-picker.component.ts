import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  form: FormGroup;
  comparisonStart = new Date('2021-06-11');
  comparisonEnd = new Date('2021-06-18');
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      daterange: new FormGroup({
        start: new FormControl(),
        end: new FormControl()
      })
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  // loops over all days with dateFilter.
  unavailableDays(calendarDate: Date): boolean {
    //this.comparisonStart = calendarDate;
    return calendarDate > new Date();
  }

}
