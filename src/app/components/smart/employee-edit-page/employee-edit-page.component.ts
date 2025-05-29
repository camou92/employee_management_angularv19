import { Component, computed, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee.model';
import { EmployeeComponent } from '../../ui/employee/employee.component';
import { EmployeeFormComponent } from '../../ui/employee-form/employee-form.component';

@Component({
  selector: 'app-employee-edit-page',
  imports: [EmployeeFormComponent],
  templateUrl: './employee-edit-page.component.html',
  styleUrl: './employee-edit-page.component.scss',
})
export class EmployeeEditPageComponent {
  //route = inject(ActivatedRoute);
  route = inject(Router);
  employeeService = inject(EmployeeService);
  //employee: Employee | null = null;

  empId = input.required<string>();
  employee = computed(() => {
    const id = this.empId();
    return this.employeeService.getEmployee(id);
  });
  constructor() {
    // snapshot
    /* const employeeId = this.route.snapshot.params['empId'];
    this.employee = this.employeeService.getEmployee(employeeId) */
    // observable
    /* this.route.params
      .pipe(
        map((params) => {
          const employeeId = params['empId'];
          return this.employeeService.getEmployee(employeeId);
        }),
        takeUntilDestroyed()
      )
      .subscribe({
        next: (employeessss) => {
          console.log({ employeessss });
          this.employee = employeessss;
        },
        error: (err) => {
          this.employee = null;
        },
      }); */
  }

  onEditEmployee(employee: Employee) {
    this.employeeService.editEmployee(employee)
    this.route.navigate(['/employees']);
  }
}
