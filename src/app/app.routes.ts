import { Routes } from '@angular/router';
import { EmployeeListPageComponent } from './components/smart/employee-list-page/employee-list-page.component';
import { EmployeeEditPageComponent } from './components/smart/employee-edit-page/employee-edit-page.component';
import { AddEmployeePageComponent } from './components/smart/add-employee-page/add-employee-page.component';

export const routes: Routes = [
  { path: 'employees', component: EmployeeListPageComponent},
  { path: 'employees/new', component: AddEmployeePageComponent},
  { path: 'employees/edit/:empId', component: EmployeeEditPageComponent},
  { path: "", redirectTo: "employees", pathMatch: 'full'}
];
