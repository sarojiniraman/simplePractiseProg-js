Employee.prototype.createEmp = function(id,firstName,lastName,age,dateJoined)
 {
    try{
     if(this.empList.length > 2) { throw "Error :Out of memory!!!"}}
  catch(e){ 
        console.log("Exception: "+ e);
       empList.exceptionHandling(e);
       console.log("after exception handler");  
        }
       finally
       { console.log("finally code");
         this.empList.push({id:id,firstName:firstName,lastName:lastName,age:age,dateJoined : new Date()});
          return this.empList;
       }
    }

  
Employee.prototype.exceptionHandling = function(e){
    
    if( e === "Error :Out of memory!!!")
     { 
       var d = new Date() ,d1 ,id;
       d = d.setMinutes(d.getMinutes()); 
       for(var i = 0;i < this.empList.length;i++)
          {  debugger;
            id = this.empList[i].id;
            d1 = this.empList[i].dateJoined;
            d1 = d1.setMinutes(d1.getMinutes());
             console.log("Diffeence : " + (d1) < (d -  1));
           if((d1) < (d -  1))
           { debugger;
              console.log(" inside if ::: datejoined :" + d1 + "  current time :" + d + " id: " + id);
              this.empList.splice(id,1);
              console.log("deleted :" + id + " emp : " + this.empList[i].firstName + " : " +this.empList[i].lastName);
           }   } 
     }}

  
Employee.prototype.deleteEmp = function(id)
{
    this.empList.splice(id,1);
   console.log("deleted id : " +  id); 
    return;
}