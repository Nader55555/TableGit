import { Component,Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { arrayofemployees } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [arrayofemployees]
})
export class AppComponent {
  editField: string="";
  constructor ( public personlista: arrayofemployees){}
    // personList: Array<any> = [
    //   { id: 1, name: 'Nader',lastname:'haddad', age: 30},
    //   { id: 2, name: 'Mario',lastname:'lahoud', age: 45 },
      
    // ];
    
    items!: MenuItem[];
    
    ngOnInit() {
        this.items = [
            {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: "/Employeelist"},
            {label: 'Addition', icon: 'pi pi-fw pi-plus',routerLink: "/employeedetail/:id"},
            
           
        ];
    }
    

    

   
    
}

