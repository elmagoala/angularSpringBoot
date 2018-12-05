import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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

  create(employee: Employee) {
    return this.http.post(this.url+'employees', employee);
  }

  getAll(): Observable<any> {
     return this.http.get(this.url+'employees');
  }

  deleteById(id: number) {
    return this.http.delete(this.url+'employee/'+id);
  }

}
