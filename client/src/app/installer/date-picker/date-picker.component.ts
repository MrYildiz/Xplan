import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InstallersService } from 'src/app/_services/installers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  dateFromForm = new FormControl(new Date()); //new Date()
  form: FormGroup;
  comparisonStart = new Date('2021-06-11');
  comparisonEnd = new Date('2021-06-18');
  model: any = {};

  constructor(private installersService: InstallersService, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.form = this.fb.group({
      //daterange: new FormGroup({
        //start: new FormControl(),
        //end: new FormControl(),
        //picker: new FormControl()//new FormControl('', [Validators.required])
        //dateFormCtrl: new FormControl(new Date()) // deze later toegevoegd
      //})
    //});
    this.model = {
      date: '', //24-02-2021 // '2021-02-24' //this.dateFromForm
      available: true
    };
  }

  onSubmit() {
    console.log(this.dateFromForm); //this.form.value
  }

  // loops over all days with dateFilter.
  unavailableDays(calendarDate: Date): boolean {
    //this.comparisonStart = calendarDate;
    return calendarDate > new Date();
  }

  makeAvailable() {
    this.installersService.makeAvailable(this.model).subscribe(() => { // je krijgt niets terug daarom lege () //this.model //this.dateFromForm
      this.toastr.success('Beschikbaar opgeslagen');
      console.log(this.dateFromForm.value);
    });
  }

}
