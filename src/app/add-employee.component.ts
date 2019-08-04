import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from './employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  service: EmployeeService;
  createdEmployee: Employee;
  createdFlag: boolean = false;
  constructor(service: EmployeeService) {
    this.service = service;
  }

  ngOnInit() {
  }
  add(data:any){
    this.createdEmployee=new Employee(data.eid,data.ename);
    this.service.add(this.createdEmployee);
    this.createdFlag=true;
  }

}