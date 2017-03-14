
var emp = [];
function employees(fn,ln,age){
     this.firstName = fn;
     this.lastName = ln;
     this.age = age;
     this.getFullName = function(){
                           console.log( "Fullname: " + this.firstName + this.lastName);
                        }
}



var e1 = new employees('will','smith',30);
var e2 = new employees('john','doe',28);
var e3 = new employees('mary','potts',26);

emp.push(e1 , e2 , e3);

console.log(emp);


function getByFirstName(fn){
   for( i = 0; i< people.length ; i++){
       if(people[i].firstName == fn){
              console.log(people[i]);           
       }else{
              console.log('Object not found with Provided FirstName');
       }
   }
}


function removeByFirstName(fn){
     for(var i = 0; i < people.length; i++){
         if(people[i].firstName == fn){
             people.splice(i,1);
             console.log(people);
         }
     }
}
