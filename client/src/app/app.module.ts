import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HomeComponent } from './home/home.component';
import { CustomerPanelComponent } from './customerPanel/customerPanel.component';
import { InstallerManagementComponent } from './admin/installer-management/installer-management.component';
import { HasRoleDirective } from './_directives/has-role.directive';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { InstallerPanelComponent } from './installer-panel/installer-panel.component';
import { RegisterInstallerComponent } from './register-installer/register-installer.component';
import { UpdateInstallerComponent } from './update-installer/update-installer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CustomerPanelComponent,
    InstallerManagementComponent,
    HasRoleDirective,
    AdminPanelComponent,
    InstallerPanelComponent,
    RegisterInstallerComponent,
    UpdateInstallerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
