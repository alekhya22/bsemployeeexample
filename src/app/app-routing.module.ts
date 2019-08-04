import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from'./employee-list.component';
import { AddEmployeeComponent } from './add-employee.component';
import { SearchComponent } from './search.component';


const routes: Routes = [
  {path:"app-list",component:EmployeeListComponent},
{path:"add-employee-list",component:AddEmployeeComponent},
{path:"search-employee",component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }