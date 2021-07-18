import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Installer } from '../_models/installer';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public loggeddOut = true;
  model: any = {};

  constructor(public accountService: AccountService, private router: Router) { } //deze injectie public anders niet te gebruiken in html van dit component.

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/'); //customerPanel
      this.loggeddOut = false;
    }, error => {
      console.log(error);
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/home');
  }

}
