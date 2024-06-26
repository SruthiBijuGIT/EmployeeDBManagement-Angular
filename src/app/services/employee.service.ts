import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';


const baseUrl = 'http://localhost:8080/api/employee';

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl);
  }

  get(id: number | string): Observable<Employee> {
    return this.http.get<Employee>(`${baseUrl}/${id}`);
  }

  create(data: Employee): Observable<Employee> {
    return this.http.post(baseUrl, data);
  }

  update(id: number | string, data: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${baseUrl}/${id}`, data);
  }

  delete(id: number | string): Observable<Employee> {
    console.log(` ${baseUrl}/${id} `)
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<void> {
    return this.http.delete<void>(baseUrl);
  }

  findByTitle(title: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${baseUrl}?title=${title}`);
  }
}
