import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PatientsComponent } from './patients/patients.component';
import { RegComponent } from './reg/reg.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'reg', component: RegComponent},
  {path:'auth', component: AuthComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'list', component: PatientsComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
