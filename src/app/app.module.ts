import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
 import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {RouterModule, Routes } from '@angular/router';
import { employeemod } from './employeemodel';
import {InputTextModule} from 'primeng/inputtext';
import {TabMenuModule} from 'primeng/tabmenu';


const appRoutes: Routes=[
{ path: 'employeedetail/:id',component: EmployeedetailComponent },
{path: 'Employeelist',component:EmployeelistComponent}, 

];

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeedetailComponent,
    // TableModule
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    // NgModel,
    FormsModule,
    TableModule,ButtonModule,
    RouterModule.forRoot(appRoutes),
    TabMenuModule,
    InputTextModule
  
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
