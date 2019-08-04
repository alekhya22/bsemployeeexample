import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  http: HttpClient;
  employees: Employee[] = [];
  constructor(http: HttpClient) {
    this.http = http;
    this.fetchEmployees();
  }
  fetched: boolean = false;

  fetchEmployees() {
    this.http.get('./employee.json').subscribe(
      data => {
        if (!this.fetched) {
          this.convert(data);
          this.fetched = true;
        }
      });
  }
  convert(data: any) {
    for (let index of data["Employee"]) {
      let employeeObj = new Employee(index.id, index.name);
      this.employees.push(employeeObj);
    }
  }
  getEmployees(): Employee[] {
    return this.employees;
  }

  delete(employeeId: number) {
    let foundIndex: number = -1;
    for (let i = 0; i < this.employees.length; i++) {
      let empIndex = this.employees[i];
      if (employeeId == empIndex.id) {
        foundIndex = i;
        break;
      }
    }
    this.employees.splice(foundIndex, 1);

  }
  add(newEmployee: Employee) {
    this.employees.push(newEmployee);
  }


  update(data: Employee) {
    let empId = data.id;
    for (let i = 0; i < this.employees.length; i++) {
      if (empId == this.employees[i].id) {
        this.employees[i].name = data.name;
        break;
      }
    }
  }
  searchEmpArr: Employee[];
  search(data): Employee[] {
    this.searchEmpArr = [];
    for (let e of this.employees) {
      if (e.id == data.id) {
        this.searchEmpArr.push(e);
      }
    }
    return this.searchEmpArr;
  }
}
export class Employee {

  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

}