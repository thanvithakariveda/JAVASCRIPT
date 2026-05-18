///object is physical existance of class
//object occupices space in main memory
//class have no space in RAM have logical existance of class
//class contains variables,methods,constructors,static v and m and blocks,getters and setters
//object holds instance data of class
//data n3eed not to be part of object is STATIC DATA
//calling metthods on the object -bcoz the method conatins buisness logic
//objects can be created without classes

//create 20 student objects
class Student{
    //properties
    //variables inside class should not use let or const
    //objects are created 
    //# used to create private variable
    #sno;
    name;
    email;


    //constructor once the object is created 
    constructor(sno,name,email)
    {
        //initialize the obj
this.sno=sno;
this.name=name;
this.email=email;

    }
    //method
    getStudentName()
{
    return this.name;


}
}
//create objects
let std1=new Student('thanvi',10,'thanvi@gmail.com')
let std2=new Student('thanv',20,'thanv@gmail.com')
console.log(std1.sno);



 class Employee
{
    #eno;
    
    //constructor 
    constructor(eno){

    
    this.#eno=eno;

}
getData(){

//instance method
console.log(`eno is ${this.#eno}`)
}
}

//student is person (inheritance)



class person{}
class Student extends Person{}

//csr HAS A engine-composition relationship
class Engine{}
class Car{


}
//object literal
let emp1={
    eno:100,
    name:'thanvi',
    address:{
        city:'hyd',
        pincode:99999

    }
}
let emp2={
eno:200,
name:"bhanu",
    address:{
        city:'hyd',
        pincode:99999


}
}
