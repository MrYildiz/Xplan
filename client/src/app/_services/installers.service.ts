import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Installer } from '../_models/installer';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
};

@Injectable({
  providedIn: 'root'
})
export class InstallersService {
  baseUrl = environment.urlAddress; //'https://localhost:5001/api/'; 

  constructor(private http: HttpClient) { }

  makeAvailable(model: any) {
    return this.http.post(this.baseUrl + '/installeravailable/add-available', model, httpOptions);
  }

  /* ===========Hier de operaties voor customer (operaties die een installer wilt doen met zijn customers)
  getInstallers(): Observable<Installer[]> {
    return this.http.get<Installer[]>(this.baseUrl + '/api/users', httpOptions);
  }

  getInstaller(username: string) {
    return this.http.get<Installer>(this.baseUrl + '/api/users/' + username, httpOptions);
  }*/
}
