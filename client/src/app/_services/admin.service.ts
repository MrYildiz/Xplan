import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.http.get<User[]>(this.baseUrl + 'admin/installers', httpOptions); // deze end point moet ik nog maken
  }

  updateInstaller(model: any) {
    return this.http.post(this.baseUrl + 'admin/update-installer', model); // deze end point moet ik nog maken
  }

  deleteInstaller(model: any) {
    return this.http.post(this.baseUrl + 'admin/delete-installer', model); // deze end point moet ik nog maken
  }

  getUsers() {
    return this.http.get('https://localhost:5001/api/users', httpOptions);
    //return this.http.get('https://localhost:5001/api/users').subscribe(users => this.users = users); 
    //console.log(this.users);
    //aanpassen als end point klaar is naar alleen installers + gebruik admin.service
  }
 
}
