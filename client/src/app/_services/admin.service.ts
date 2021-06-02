import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Installer } from '../_models/installer';
import { User } from '../_models/user';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = 'https://localhost:5001/api/';
  users: any;

  constructor(private http: HttpClient) { }

  getInstallers() {
    return this.http.get<Installer[]>(this.baseUrl + 'admin/installers', httpOptions);
  }

  getInstaller(username: string) {
    return this.http.get<Installer>(this.baseUrl + 'users/' + username, httpOptions);
  }

  updateInstaller(installer: Installer) {
    return this.http.put(this.baseUrl + 'users', installer, httpOptions);
  }

  deleteInstaller(id: string) {
    return this.http.delete('https://localhost:5001/api/users/' + id, httpOptions);
  }

  getUsers() {
    return this.http.get('https://localhost:5001/api/users', httpOptions);
    //return this.http.get('https://localhost:5001/api/users').subscribe(users => this.users = users); 
    //aanpassen als end point klaar is naar alleen installers + gebruik admin.service
  }

  setFoundInstaller(foundInstaller: Installer) {
    localStorage.setItem('foundInstaller', JSON.stringify(foundInstaller));
  }

}
