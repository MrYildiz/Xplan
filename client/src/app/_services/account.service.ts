import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeComponent } from '../home/home.component';
import { User } from '../_models/user';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<User>(1); // is om data die je met observable krijgt op te slaan. 1 betekent maar 1 opslaan.
  currentUser$ = this.currentUserSource.asObservable(); // $ is convention om aan te geven dat iets een observable is.

  constructor(private http: HttpClient, private router: Router) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          this.setCurrentUser(user);
          this.currentUserSource.next(user);
          window.location.reload();
        }
      })
    )
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model, httpOptions);
  }

  setCurrentUser(user: User) {
    user.roles = []; // hoeft geen array te zijn omdat ik waarschijnlijk niet wil dat een user meerdere rollen krijgt. Evt later aanpassen
    const roles = this.getDecodedToken(user.token).role;
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles); // dit was de implementatie voor user met meerdere rollen. rollen komen dan in een array en ternary operator checkt of het een array is. Dit evt. later aanpassen.
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  getDecodedToken(token) {
    return JSON.parse(atob(token.split('.')[1])); // 1 omdat je alleen de middelste stukje van de token wilt hebben (de payload)
  }
}
