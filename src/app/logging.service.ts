

export class arrayofemployees{
    public employees: Array<any> = [
        {firstname: "nader",lastname:"haddad",age:23,id:1}
        
      ];
        public id_nber=2;
        id_index:any;
      public accessin=true;
      editField: string="";
      
      
     
      
      addw(employee:any){

      
       this.employees.push(employee);
      // console.log(this.employees[3].id);
      //  this.id_nber++;
      
      }
      modify(employee:any){
         
        this.employees=employee;
        
       }
       getEmployees(){return this.employees};
     
      // changeValue(_id: number, _property: string, event: any) {
      //   this.editField = event.target.textContent;
      // }
     
      remove(id: any) {
       console.log(id);
      this.id_index=this.employees.indexOf(id);
        this.employees.splice(this.id_index,1); 
        //the number of elements to be removed
      }
}