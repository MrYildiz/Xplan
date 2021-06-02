import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Installer } from 'src/app/_models/installer';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-installer-management',
  templateUrl: './installer-management.component.html',
  styleUrls: ['./installer-management.component.css']
})
export class InstallerManagementComponent implements OnInit {
  installers: Installer[]; // users: User[];
  //  registerForm: FormGroup;

  constructor(private adminService: AdminService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getInstallers();
  }

  getInstallers() {
    this.adminService.getInstallers().subscribe(installers => {
      this.installers = installers;
    });
  }


}
