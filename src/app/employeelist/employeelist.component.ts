import { AfterContentChecked, Component, DoCheck, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { arrayofemployees } from '../logging.service';
import { employeemod } from '../employeemodel';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  
})
export class EmployeelistComponent  implements OnInit,DoCheck, OnChanges{

  editField: string="";
   constructor (public personlista: arrayofemployees){}
   
employeelist: Array<any>=[];

ngDoCheck(){ 
  // this.employeelist=this.personlista.getEmployees();
}
 
ngOnChanges(changes: SimpleChanges){

}
ngOnInit(){
  // this.personlista.employees.subscribe(Lemployees=>this.employeelist=Lemployees);
   this.employeelist=this.personlista.getEmployees();
}  // ngOnInit(): void {
   
  // }

}
