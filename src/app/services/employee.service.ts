import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[] = [
      {
        _id: '658475125fudhld',
        name: 'User Mohamed',
        department: 'IT',
        level: 'J',
      },
      {
        _id: '658475125fufrzd',
        name: 'User Khady',
        department: 'HR',
        level: 'M',
      },
    ];

  constructor() { }

  getEmployee(id: string){
    return this.employees.find(
      (employee) => employee._id === id
    ) || null;
  }

  deleteEmployee(id: string) {
    this.employees = this.employees.filter(
      (employee) => employee._id !== id
    )
  }

  getEmployees(){
    return this.employees
  }

  addEmployee(employee: Employee) {
    const _id = crypto.randomUUID();
    this.employees = [...this.employees, {...employee, _id}]
  }

  editEmployee(employee: Employee) {
    const { _id } = employee;
    const index = this.employees.findIndex((employee) => employee._id === _id);

    if (index !== -1) {
      const part1 = this.employees.slice(0, index);
      const part2 = this.employees.slice(index + 1);
      const employees = part1.concat(employee).concat(part2);
      this.employees = employees;
    }
  }
}
