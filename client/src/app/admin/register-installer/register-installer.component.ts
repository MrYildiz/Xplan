import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register-installer',
  templateUrl: './register-installer.component.html',
  styleUrls: ['./register-installer.component.css']
})
export class RegisterInstallerComponent implements OnInit {
  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.model = {
      email: '', // email ipv username
      password: '',
      //confirmPassword: '',
      role: 'Installer',
      clientURI: 'https://localhost:4200/authentication/emailconfirmation'
    };
  }

  registerInstaller() {
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
