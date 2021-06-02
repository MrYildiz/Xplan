import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Installer } from 'src/app/_models/installer';
import { User } from 'src/app/_models/user';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-update-installer',
  templateUrl: './update-installer.component.html',
  styleUrls: ['./update-installer.component.css']
})
export class UpdateInstallerComponent implements OnInit {
  @ViewChild('updateForm') updateForm: NgForm;
  //@Input() installerFromFindInstallerComponent: any;
  installer: Installer;
  name = new FormControl('');

  constructor(private adminService: AdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.setInstaller();
  }

  setInstaller() {
    this.installer = JSON.parse(localStorage.getItem('foundInstaller'));
  }

  /*
  getInstaller(username: string) {
    this.adminService.getInstaller(username).subscribe(installer => {
      this.installer = installer;
    });
  }
  */

  updateInstaller() {
    this.adminService.updateInstaller(this.installer).subscribe(() => { // je krijgt niets terug daarom lege ()
      this.toastr.success('Gegevens opgeslagen');
      this.updateForm.reset(this.installer);
    });
  }

  cancel() {
    window.location.reload();
    console.log('geannuleerd');
  }

}
