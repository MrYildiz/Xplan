import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register-installer',
  templateUrl: './register-installer.component.html',
  styleUrls: ['./register-installer.component.css']
})
export class RegisterInstallerComponent implements OnInit {
  model: any = {};
  //registerForm: FormGroup;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.model = {
      username: "",
      password: "",
      role: "Installer"
    };
  }
/**
 * initializeForm() {
    this.registerForm = this.fb.group({

    })
  }
 * 
 */
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
