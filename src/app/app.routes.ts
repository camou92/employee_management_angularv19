import { Routes } from '@angular/router';
import { EmployeeListPageComponent } from './employee/components/smart/employee-list-page/employee-list-page.component';
import { EmployeeEditPageComponent } from './employee/components/smart/employee-edit-page/employee-edit-page.component';
import { AddEmployeePageComponent } from './employee/components/smart/add-employee-page/add-employee-page.component';
import { RegisterPageComponent } from './authentication/components/smart/register-page/register-page.component';
import { LoginPageComponent } from './authentication/components/smart/login-page/login-page.component';
import { authGuard } from './authentication/guards/auth.guard';
import { nonAuthGuard } from './authentication/guards/non-auth.guard';

export const routes: Routes = [
  { path: 'register', canMatch:[nonAuthGuard], component: RegisterPageComponent },
  { path: 'login', canMatch:[nonAuthGuard], component: LoginPageComponent },
  {
    path: 'employees',
    canMatch: [authGuard],
    children: [
      { path: '', component: EmployeeListPageComponent },
      { path: 'new', component: AddEmployeePageComponent },
      { path: 'edit/:empId', component: EmployeeEditPageComponent },
    ],
  },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
];
