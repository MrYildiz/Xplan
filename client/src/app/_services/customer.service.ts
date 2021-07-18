import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { InstallerAvailable } from '../_models/installerAvailable';
import { InstallerAvailableDto } from '../_models/user/installer-available-dto.model';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.urlAddress;

  constructor(private http: HttpClient) { }

  getAvailableDays(id: number) {
    return this.http.get<InstallerAvailableDto[]>(this.baseUrl + '/installeravailable/installer-availables/' + id, httpOptions);
  }

}
