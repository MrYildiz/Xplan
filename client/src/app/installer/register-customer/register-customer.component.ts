import { Component, OnInit } from '@angular/core';
import { Installer } from 'src/app/_models/installer';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  model: any = {};
  //installer: Installer;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    //this.installer = JSON.parse(localStorage.getItem('user')); //  foundInstaller
    this.model = {
      //createdbyinstaller: this.installer.id,
      email: '', // email ipv username
      password: '',
      //confirmPassword: '',
      role: 'Customer',
      clientURI: 'https://localhost:4200/authentication/emailconfirmation' // todo: niet hardcode
    };
  }

  registerCustomer() {
    this.accountService.registerCustomer(this.model).subscribe(response => {
      window.location.reload();
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    console.log('geannuleerd');
  }

}
