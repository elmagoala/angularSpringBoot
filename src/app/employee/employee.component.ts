import { Component, OnInit } from '@angular/core';
import {  formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee/employee.service';
import { Employee } from '../models/employee/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employeeForm: FormGroup;
  public submitted = false;
  private employee: Employee = new Employee();
  public listEmployees: Employee[];

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.employeeForm = this.fb.group({
      ultimatix: ['', [Validators.required, Validators.pattern('(^[0][0-9]+)|([0-9]\d*)')]],
      identification: ['', [Validators.required, Validators.pattern('(^[0][0-9]+)|([0-9]\d*)')]],
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      birthDate: ['', [Validators.required]]
    });
  }

  get f() { return this.employeeForm.controls; }

  save() {
    this.submitted = true;
    
    
    if (this.employeeForm.invalid) {
        return;
    }
    this.setObjectEmployee(this.employeeForm);
<<<<<<< HEAD
    this.employeeService.create(this.employee).subscribe(
      data => {
          console.log("POST Request is successful ", data);
          this.getAll();
          this.employeeForm.reset();
      },
      error => {
          console.log("Error", error);
      })
  }

  private getAll() {
    this.employeeService.getAll().subscribe(data => {
      this.listEmployees = data;
    });
=======
    //console.log(JSON.stringify(this.employee));
    //this.employeeService.create(this.employee);
    //console.log(this.employeeService.create(this.employee));
>>>>>>> 02638e93a18d82395af019e303cd62bc28d47012
  }

  private setObjectEmployee(employeeForm: FormGroup) {
    this.employee.ultimatix = employeeForm.value.ultimatix;
    this.employee.identification = employeeForm.value.identification;
    this.employee.name = employeeForm.value.name;
    this.employee.lastName = employeeForm.value.lastName;
    this.employee.birthDate = formatDate(employeeForm.value.birthDate, 'dd/MM/yyyy','en-US')

  }

}