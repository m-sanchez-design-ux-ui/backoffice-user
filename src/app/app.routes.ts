import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './_layout/anonymous/auth/auth.component';
import { SignInComponent } from './auth/pages/sign-in/sign-in.component';
import { PasswordRecoverComponent } from './auth/pages/password-recover/password-recover.component';
import { PasswordChangeComponent } from './auth/pages/password-change/password-change.component';
import { AuthorizedComponent } from './_layout/authorized/authorized.component';
import { DashboardComponent } from './dashboard/pages/dashboard/dashboard.component';
import { Error404Component } from './error-pages/error-404/error-404.component';
import { Error500Component } from './error-pages/error-500/error-500.component';
import { TemplateComponent } from './template/template.component';
import { EmployeesComponetComponent } from './employees/employees-componet.component';
import { ConsumptionReportsComponent } from './consumption-reports/consumption-reports.component';
import { CompanyComponent } from './company/company.component';
import { BatchDetailComponent } from './batches/pages/batch-detail/batch-detail.component';
import { BatchesComponent } from './batches/batches.component';

export const routes: Routes = [
  // Redirección inicial al iniciar la app
  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // 👈 ¡Este va primero!
  //Login Flow
  {
    path: 'auth', 
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', component: SignInComponent },
      { path: 'password-recover', component: PasswordRecoverComponent },
      { path: 'password-change', component: PasswordChangeComponent },
    ]
  },
  //Backoffice Flow
  {
    path: '',
    component: AuthorizedComponent,
    children: [
      { path: 'template', component: TemplateComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employees', component: EmployeesComponetComponent },
      { path: 'consumption-reports', component: ConsumptionReportsComponent },
      { path: 'batches', component: BatchesComponent },
      { path: 'batches/bacth-detail', component:BatchDetailComponent },
      { path: 'company', component: CompanyComponent },
    ]
  },
  //Error Pages
  { path: 'error-404', component: Error404Component},
  { path: 'error-500', component: Error500Component},
  
  // Ruta comodín al final
  //{ path: '**', redirectTo: 'error-404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}