import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from './employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  service: EmployeeService;
  emp: Employee[]=[];
  delete(id:number){
    this.service.delete(id);
    this.emp=this.service.getEmployees();
  }

  constructor(service: EmployeeService) {
    this.service = service;
  }
  column:string="id";
  order:boolean=true;
  sort(column:string){
   if(this.column=column){
     this.order=!this.order;
   }
  //  else{
  //    this.order=true;
  //    this.column=column;
  //  }
  }
  isUpdate:boolean=true;
  updateData(){
    this.isUpdate=!this.isUpdate;
  }
  update(data:any){
    this.service.update(data);
    this.emp=this.service.getEmployees();
  }

  ngOnInit() {
    this.service.fetchEmployees();
    this.emp=this.service.getEmployees();
  }

}