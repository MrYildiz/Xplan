import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Installer } from '../_models/installer';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
}

@Injectable({
  providedIn: 'root'
})
export class InstallersService {
  baseUrl = environment.urlAddress;

  constructor(private http: HttpClient) { }

  /* ===========Hier de operaties voor customer (operaties die een installer wilt doen met zijn customers)
  getInstallers(): Observable<Installer[]> {
    return this.http.get<Installer[]>(this.baseUrl + '/api/users', httpOptions);
  }

  getInstaller(username: string) {
    return this.http.get<Installer>(this.baseUrl + '/api/users/' + username, httpOptions);
  }*/
}
