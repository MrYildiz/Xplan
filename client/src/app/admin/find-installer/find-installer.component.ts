import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Installer } from 'src/app/_models/installer';
import { User } from 'src/app/_models/user';
import { AdminService } from 'src/app/_services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-find-installer',
  templateUrl: './find-installer.component.html',
  styleUrls: ['./find-installer.component.css']
})
export class FindInstallerComponent implements OnInit {
  @ViewChild('findForm') findForm: NgForm;
  installer: Installer;
  user: User;
  //@Input() usersFromHomeComponent: any;
  name = new FormControl('');

  constructor(private adminService: AdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.installer = {
      id: null,
      email: '',
      username: '',
      available: []
    };
  }

  getInstaller(username: string) {
    this.adminService.getInstaller(username).subscribe(installer => {
      this.installer = installer;
      this.adminService.setFoundInstaller(this.installer);
    });
  }

  deleteInstaller() {
    this.adminService.deleteInstaller(this.installer.id.toString()).subscribe(() => { // je krijgt niets terug daarom lege ()
      this.toastr.success('Installer Verwijderd');
      this.installer = {
        id: null,
        email: '',
        username: '',
        available: []
      };
      window.location.reload();
    });
  }

  cancel() {
    console.log('geannuleerd');
  }

}
