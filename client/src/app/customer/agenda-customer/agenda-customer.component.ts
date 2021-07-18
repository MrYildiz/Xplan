import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { Installer } from 'src/app/_models/installer';
import { InstallerAvailableDto } from 'src/app/_models/user/installer-available-dto.model';
import { UserForRegistrationDto } from 'src/app/_models/user/userForRegistrationDto.model';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-agenda-customer',
  templateUrl: './agenda-customer.component.html',
  styleUrls: ['./agenda-customer.component.css']
})
export class AgendaCustomerComponent implements OnInit {
  availables: InstallerAvailableDto[];
  installer: UserForRegistrationDto;
  createdByInstaller: any;
  dateFromForm = new FormControl(new Date());
  form: FormGroup;
  comparisonStart = new Date('2021-06-11');
  comparisonEnd = new Date('2021-06-18');
  model: any = {};
  myFilter: any;

  constructor(private customerService: CustomerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.installer = JSON.parse(localStorage.getItem('user'));
    this.createdByInstaller = this.installer.createdByInstaller;
    this.getInstallerAvailables();
  }

  //onSubmit() {
    //console.log(this.dateFromForm); //this.form.value
  //}

  unavailableDays(calendarDate: Date): boolean {
    //this.comparisonStart = calendarDate;
    return calendarDate > new Date();
  }

  getInstallerAvailables() {
    this.customerService.getAvailableDays(this.createdByInstaller).subscribe(availables => {
      this.availables = availables;
      const availbls = this.availables.map(obj => obj.date);
      this.myFilter = (d: Date): boolean => {
        const availableDates: Date[] = [];
        for (let i=0; i<availbls.length; i++) {
          availableDates.push(new Date(availbls[i]));
        }
        return availableDates.findIndex(testDate => d.toDateString() === testDate.toDateString()) >= 0;
      };
    });
  }

}
