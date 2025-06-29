import { Component, input, output } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { LevelPipe } from '../../../pipes/level.pipe';


@Component({
  selector: 'app-employee',
  imports: [LevelPipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

  employee = input.required<Employee>();
  nameClick = output<string>();

  onNameClick() {
    this.nameClick.emit(this.employee()._id);
  }
}
