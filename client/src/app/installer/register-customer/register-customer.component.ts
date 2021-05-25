import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.model = {
      email: '', // email ipv username
      password: '',
      //confirmPassword: '',
      role: 'Customer',
      clientURI: 'https://localhost:4200/authentication/emailconfirmation'
    };
  }

  registerCustomer() {
    this.accountService.register(this.model).subscribe(response => {
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
