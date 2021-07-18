import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { HomeComponent } from './home/home.component';
import { CustomerPanelComponent } from './customer/customerPanel/customerPanel.component';
import { InstallerManagementComponent } from './admin/installer-management/installer-management.component';
import { HasRoleDirective } from './_directives/has-role.directive';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { InstallerPanelComponent } from './installer/installer-panel/installer-panel.component';
import { RegisterInstallerComponent } from './admin/register-installer/register-installer.component';
import { UpdateInstallerComponent } from './admin/update-installer/update-installer.component';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
import { EmailConfirmationComponent } from './authentication/email-confirmation/email-confirmation.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { AgendaComponent } from './installer/agenda/agenda.component';
import { CustomerManagementComponent } from './installer/customer-management/customer-management.component';
import { RegisterCustomerComponent } from './installer/register-customer/register-customer.component';
import { UpdateCustomerComponent } from './installer/update-customer/update-customer.component';
import { UpdateAppointmentComponent } from './customer/update-appointment/update-appointment.component';
import { UpdateMyDetailsComponent } from './customer/update-my-details/update-my-details.component';
import { DatePickerComponent } from './installer/date-picker/date-picker.component';
import { MaterialModule } from './_shared/modules/material.module';
import { FindInstallerComponent } from './admin/find-installer/find-installer.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { InstallerDashboardComponent } from './installer/installer-dashboard/installer-dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { AgendaCustomerComponent } from './customer/agenda-customer/agenda-customer.component';

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
    ResetPasswordComponent,
    AgendaComponent,
    CustomerManagementComponent,
    RegisterCustomerComponent,
    UpdateCustomerComponent,
    UpdateAppointmentComponent,
    UpdateMyDetailsComponent,
    DatePickerComponent,
    FindInstallerComponent,
    AdminDashboardComponent,
    InstallerDashboardComponent,
    AgendaCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
