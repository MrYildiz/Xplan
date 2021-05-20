import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
import { EmailConfirmationComponent } from './authentication/email-confirmation/email-confirmation.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';

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
    UpdateInstallerComponent,
    FooterComponent,
    EmailConfirmationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
