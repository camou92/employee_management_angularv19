import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  getEmployee(id: string) {}

  deleteEmployee(id: string) {}

  getEmployees() {}

  addEmployee(employee: Employee) {}

  editEmployee(employee: Employee) {}
}
