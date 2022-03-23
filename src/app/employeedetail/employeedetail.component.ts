import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EmployeelistComponent } from '../employeelist/employeelist.component';
import { arrayofemployees } from '../logging.service';
@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css'],
  
})
export class EmployeedetailComponent implements OnInit {

  constructor ( public personlista: arrayofemployees,private route: ActivatedRoute){}
  public employee:any={};
  
  
    
 

   modify(fname:any,lname:any,age:any){
   

      this.personlista.employees[this.employee.idx-1].firstname=fname;
    this.personlista.employees[this.employee.idx-1].lastname=lname;
    this.personlista.employees[this.employee.idx-1].age=age;
    // this.personlista.employees[this.employee.idx-1].id=this.employee.id;
      
      
   }
 
  add(){
    
    this.employee.id=this.personlista.id_nber;
    this.personlista.addw(this.employee);
    this.personlista.id_nber++;
    this.employee={};
  
  }  

  ngOnInit(): void {
    // this.employee.id=2;
    
 this.route.paramMap.subscribe(
      params =>
      {this.employee.idx = params.get('id');}
      
        )
  }

}
