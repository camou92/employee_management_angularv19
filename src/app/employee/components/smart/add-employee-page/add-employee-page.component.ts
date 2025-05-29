import { Component, inject } from '@angular/core';
import { EmployeeFormComponent } from '../../ui/employee-form/employee-form.component';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';
import { EmployeeApiService } from '../../../services/employee-api.service';

@Component({
  selector: 'app-add-employee-page',
  imports: [EmployeeFormComponent],
  templateUrl: './add-employee-page.component.html',
  styleUrl: './add-employee-page.component.scss',
})
export class AddEmployeePageComponent {
  //employeeService = inject(EmployeeService);
  employeeServiceApi = inject(EmployeeApiService);
  router = inject(Router);

  onAddEmployee(employee: Employee) {
    // this.employeeService.addEmployee(employee)
    this.employeeServiceApi
      .addEmployee(employee)
      .subscribe((employee) => console.log(employee));
    this.router.navigate(['/employees']);
  }
}
