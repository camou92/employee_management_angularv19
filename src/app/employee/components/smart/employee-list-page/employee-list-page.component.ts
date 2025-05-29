import { Component, inject } from '@angular/core';
import { EmployeeComponent } from '../../ui/employee/employee.component';
import { EmployeeListComponent } from '../../ui/employee-list/employee-list.component';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { Router, RouterLink } from '@angular/router';
import { EmployeeApiService } from '../../../services/employee-api.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-employee-list-page',
  imports: [EmployeeComponent, EmployeeListComponent, RouterLink],
  templateUrl: './employee-list-page.component.html',
  styleUrl: './employee-list-page.component.scss'
})
export class EmployeeListPageComponent {

  employees: Employee[] = [];


  currentEmployee: null | Employee = null

  employeeService = inject(EmployeeService)
  employeeApiService = inject(EmployeeApiService)

  router = inject(Router)

  title = 'employee_app';

  constructor(){
    this.getEmployees()
  }

  getEmployees(){
    //this.employees = this.employeeService.getEmployees()
    this.employeeApiService.getEmployees().subscribe((employee) => {
      this.employees = employee
    })
  }

  onNameClick(employeeId: string) {
    console.log(employeeId);
  }

  showDetails(employeeId: string) {
  this.currentEmployee = this.employees.find((employee) => employee._id === employeeId) || null;

  }

  onDelete(employeeId: string) {
    this.currentEmployee = null
    this.employeeApiService.deleteEmployee(employeeId).pipe(concatMap(() => this.employeeApiService.getEmployees())).subscribe((employees) => {
      this.employees = employees
    })
     this.getEmployees()
    //console.log(employeeId);
    /* this.currentEmployee = null
   this.employeeService.deleteEmployee(employeeId)
   this.getEmployees() */

  }

  onEdit(employeeId: string) {
    this.router.navigate(['employees/edit', employeeId])
  }
}
