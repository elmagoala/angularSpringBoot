import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { GLOBAL } from '../global';
import { Employee } from '../../models/employee/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = GLOBAL.url;
  }

  create(employee: Employee)/*: Observable<Employee>*/ {
    //return this.http.post(this.url+'employees', employee).pipe();
    this.http.post(this.url+'employees', employee).subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      }
    
    //console.log(employee);
    //return this.http.post(this.url+'employees',employee).map(res => res.json());
  }
}
