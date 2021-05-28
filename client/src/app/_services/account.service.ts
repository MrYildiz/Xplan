import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeComponent } from '../home/home.component';
import { CustomEncoder } from '../_helpers/custom-encoder';
import { ForgotPasswordDto } from '../_models/resetPassword/forgot-password-dto';
import { ResetPasswordDto } from '../_models/resetPassword/reset-password-dto';
import { User } from '../_models/user';
import { UserForRegistrationDto } from '../_models/user/userForRegistrationDto.model';
import { EnvironmentUrlService } from './environment-url.service';

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
  private currentUserSource = new ReplaySubject<UserForRegistrationDto>(1); // was User. / is om data die je met observable krijgt op te slaan. 1 betekent maar 1 opslaan.
  currentUser$ = this.currentUserSource.asObservable(); // $ is convention om aan te geven dat iets een observable is.

  constructor(private http: HttpClient, private router: Router, private envUrl: EnvironmentUrlService) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: UserForRegistrationDto) => { // was User
        const user = response;
        if (user) {
          this.setCurrentUser(user);
          this.currentUserSource.next(user);
          window.location.reload();
        }
      })
    )
  }

  registerInstaller(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model, httpOptions);
  }

  registerCustomer(model: any) {
    return this.http.post(this.baseUrl + 'account/registerCustomer', model, httpOptions);
  }

  public forgotPassword = (route: string, body: ForgotPasswordDto) => {
    return this.http.post(this.createCompleteRoute(route, this.envUrl.urlAddress), body);
  }

  public resetPassword = (route: string, body: ResetPasswordDto) => {
    return this.http.post(this.createCompleteRoute(route, this.envUrl.urlAddress), body);
  }

  setCurrentUser(user: UserForRegistrationDto) { // User
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

  public confirmEmail = (route: string, token: string, email: string) => {
    let params = new HttpParams({ encoder: new CustomEncoder() });
    params = params.append('token', token);
    params = params.append('email', email);
  
    return this.http.get(this.createCompleteRoute(route, this.envUrl.urlAddress), { params: params });
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}
