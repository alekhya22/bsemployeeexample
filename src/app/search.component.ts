import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from './employee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
service:EmployeeService;
emp:Employee[]=[];
  constructor(service:EmployeeService) {
    this.service=service;
   }
search(data){
  this.emp=this.service.search(data);
}
  ngOnInit() {
  }

}