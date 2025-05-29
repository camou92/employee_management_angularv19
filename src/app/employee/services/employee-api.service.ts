import { inject, Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_BASE_URL = "http://localhost:5000/employees"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNtb2hhbWVkOTkyQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6Ik1vaGFtZWQiLCJsYXN0TmFtZSI6IkNhbWFyYSIsIl9pZCI6IjY4Mzg5OTc0MDk3NWFlMzE0N2FlZTcyYyIsImlhdCI6MTc0ODU0MjczMSwiZXhwIjoxNzQ4NjI5MTMxfQ.AGITO56kOlQWgBN9tW0IPHHS9AqzcXcD7KscYEBrWNY"

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {

  http = inject(HttpClient)

  getEmployee(id: string) {
     const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.get<Employee>(`${API_BASE_URL}/${id}`, {headers})
  }

  deleteEmployee(id: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.delete(`${API_BASE_URL}/${id}`, {headers})
  }

  getEmployees() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.get<Employee[]>(API_BASE_URL, {headers})
  }

  addEmployee(employee: Employee) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.post<Employee>(API_BASE_URL, employee, {headers})
  }

  editEmployee(employee: Employee) {}
}
