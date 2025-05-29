import { Component, inject } from '@angular/core';
import { EmployeeComponent } from '../../ui/employee/employee.component';
import { EmployeeListComponent } from '../../ui/employee-list/employee-list.component';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list-page',
  imports: [EmployeeComponent, EmployeeListComponent, RouterLink],
  templateUrl: './employee-list-page.component.html',
  styleUrl: './employee-list-page.component.scss'
})
export class EmployeeListPageComponent {

  employees: Employee[] = [];

  /* employee: Employee = {
    _id: '658475125fudhld',
    name: 'User Mohamed',
    departement: 'IT',
    level: 'J',
  };
 */

  currentEmployee: null | Employee = null

  employeeService = inject(EmployeeService)

  router = inject(Router)

  title = 'employee_app';

  constructor(){
    this.getEmployees()
  }

  getEmployees(){
    this.employees = this.employeeService.getEmployees()
  }

  onNameClick(employeeId: string) {
    console.log(employeeId);
  }

  showDetails(employeeId: string) {
  this.currentEmployee = this.employeeService.getEmployee(employeeId);

  }

  onDelete(employeeId: string) {
    //console.log(employeeId);
    this.currentEmployee = null
   this.employeeService.deleteEmployee(employeeId)
   this.getEmployees()

  }

  onEdit(employeeId: string) {
    this.router.navigate(['employees/edit', employeeId])
  }
}
