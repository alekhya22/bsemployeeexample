import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee.component';
import {FormsModule} from '@angular/forms';
import {EmployeeService} from './employee.service';

import { OrderByPipe } from './order-by.pipe';
import { SearchComponent } from './search.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,

    OrderByPipe,

    SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }