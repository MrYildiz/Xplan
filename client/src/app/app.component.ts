import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { UserForRegistrationDto } from './_models/user/userForRegistrationDto.model';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Xplan';

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: UserForRegistrationDto = JSON.parse(localStorage.getItem('user')); // was User
    if (user) {
      this.accountService.setCurrentUser(user);
    }
  }

}
