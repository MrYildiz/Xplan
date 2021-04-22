import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { CustomerPanelComponent } from './customerPanel/customerPanel.component';
import { HomeComponent } from './home/home.component';
import { InstallerPanelComponent } from './installer-panel/installer-panel.component';
import { AdminGuard } from './_guards/admin.guard';
import { AuthGuard } from './_guards/auth.guard';
import { CustomerGuard } from './_guards/customer.guard';
import { InstallerGuard } from './_guards/installer.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard]},
      //{path: 'installer', component: InstallerPanelComponent, canActivate: [InstallerGuard]},
      //{path: 'customerPanel', component: CustomerPanelComponent, canActivate: [CustomerGuard]},
    ]
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'installer', component: InstallerPanelComponent, canActivate: [InstallerGuard]},
    ]
  },
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
