import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';
import { Employee } from '../models/employee/employee';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  displayedColumns = ['id', 'ultimatix', 'identification', 'name', 'birthDate', 'action'];
  @Input() employees: Employee[];

  constructor(private employeeService: EmployeeService) {
    if(this.employees == null) {
       this.getAll();
    }
  }

  ngOnInit() {
  }

  getAll() {
    this.employeeService.getAll().subscribe(
      data => {
        this.employees = data;
      },
      error => {
        console.log("Error", error);
      });
  }

  delete(id: number) {
    this.employeeService.deleteById(id).subscribe(resp => {
      this.getAll();
    }, error => {
      console.log("Error", error);
    });
  }

}