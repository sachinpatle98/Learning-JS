// console.log("Welcome !");
document.write("Hello ");
// document.write("<br>");
// console.log("hello");

 //alert("this is me");


// for(let i=0;i<=10;i++){
//     document.write(`2 * ${i} = ${2*i}`);
//     document.write("<br>")
// }
/*------------------------------------------------------------------------------*


// -------Array------

// const languages = ['javascript','java','c','pythpon'];
// // ---> use for o/p
// console.log(languages.length);   
// // for getting index
//  console.log(languages[0]);
//  console.log(languages[1]);
//  console.log(languages[2]);

// //   for adding element to last of the array & then print
// languages.push('c++');
// console.log(languages);

// //   for adding element to first of the array & then print
// languages.unshift('dart');
// console.log(languages);

// //   for removing  element from the last  of the array & then print
// languages.pop();
// console.log(languages);

// //   for removing  element from the first  of the array & then print
// languages.shift();
// console.log(languages);


/*------------------------------------------------------------------------------*


// // Object --->store the key values & pairs---> are basically in this example store in the array.... 

// const actors = [
//     {name:'actor1' , payment:100},
//     {name:'actor2' , payment:200},
//     {name:'actor3' , payment:300}

// ]


// for(let i=0;i<actors.length;i++){
//     console.log(actors[i]);

// }

//  foe ex i want to deduct 10rs from all of actors payment using loop

// for(let i=0;i<actors.length;i++){
//     actors[i].payment = actors[i].payment -10;
//     console.log(actors[i]);

// }


//  Using ForEach loop

// actors.forEach((actor) => {

//     console.log(actor); 
// })


//  Use For Of Loop

// for(let actor of actors){

//     console.log(actor);
// }


//  Filters

const students = [
    {name : 'student 1'  , marks:50 },
    {name : 'student 2'  , marks:60 },
    {name : 'student 3'  , marks:35 }
];
// const failed = students.filter((student) =>{
//     // if we returns true then it shows all the object present in arrays
//     return true;

//     // if we returns false then it not shows any objects
//     return false;
    

// })
// console.log(failed);

// for ex if i remove student whose marks have below 45 then remove using filter

// const failed = students.filter((student) => {

//     if(student.marks < 45){
//         return true;
//     }
//     else{
//         false;
//     }
// });
// console.log(failed);

// OR ---> we can write in one line


const failed = students.filter((student) => student.marks < 45 );
console.log(failed);


// var str = "Hi";
// var str2 = " my name is ";
// var str3 = "sachin"
// var newstr = str.concat(str2);
// var newstr1 = str.concat(str2,str3);
// document.write(newstr);  
//document.write(newstr1);

// var arr = ["apple" , "grapes" , "banana" , "pineapple"];
// // document.write(arr);
// // console.log(arr[2]);
// arr.push("1234");
// arr.pop();
// arr.shift();
// console.log(arr);


// function mul(num1 , num2){
//     var mul = num1*num2; 
//     console.log(mul);
// }
// mul(2,4);

// function multable(num){
//     for(let i=1;i<=10;i++){
//         document.write(`${num} * ${i} = ${num*i}`);
//         document.write("<br>");

//     }
// }
// multable(2);
// document.write("<br>");
// document.write("<br>");
// multable(5);

// function add(){

    // console.log(arguments.length); // for lenght
    // console.log(arguments);
//  let sum =0;
//     if(arguments.length == 0){
//         console.log("No parameter passed !")
//     }
//     else{
//         for(let i=0;i< arguments.length;i++){
//         sum = sum + arguments[i];

//         }
//         console.log(sum);
//     }
// }
// // add();
// add(1);
// add(1,2);
// add(1,2,3);
// add(1,2,3,4);


// returning value

// function add(a , b){
//     return (a+b);
// }
// let c = add(5,11);

// document.write(c);


// function compare(a,b){
//     if(a > b){
//         return 1;
//     }
//     else if(b > a){
//         return -1;

//     }
//     else{
//         return 0;
//     }
// }
// let c = compare(6,6);

// document.write(c);

/*------------------------------------------------------------------------------*

// Global vs local variable                                                  

// Global ---->  varibale define outside of the function ---> global variable works anywhere in the body
// Local ---->  varibale define inside  the function ---> local variable works only under this funtion

// let car = "audi"; // global variable

// function add(a , b){

   

//     let result  = 33;  // local variable

//     document.write(result);
    
//     document.write("<br>");
//     document.write(car);
// }
// add();

/*------------------------------------------------------------------------------*

// Anonymus function ---> no funtion name & funtion is define in a variable

// let show = function () {
//     console.log("Hello World..!");
// };
// show();


// let callFun = function () {
//     console.log("hello World..!");
//     alert("Hello Wrold..!")
// };
// callFun();

/*------------------------------------------------------------------------------*



//  Immediately Invoked function

// (function() {

//     console.log("hello World..!");
//     alert("Hello Wrold..!");
// })();


/*------------------------------------------------------------------------------*


// Objects ----> store the key value pairs

// let person = {
//     name:"john",
//     age:23
// };

//  modified the object or update the object 
//  or add any new property in  the existing object
// person.name = 'jeet';
// person.num = 1234;

//  delete any  property from the object by using dalate method

// delete person.num;     

// //  Dot noation
// console.log(person);
// // Bracket notation
// console.log(person['name']);


//  By using (in operator) we can find or check that property is present or not in the object ---> but it will get o/p in the form of booleans (TRUE/FALSE)
// console.log('height' in person);

// let person = {
//     name:"john",
//     num : 1234,
//     age:23
// };

// //  if we have to find what are keys present in the object then we use (For in loop for access the key and their values)
// for(key in person){
//     console.log(key +" : " + person[key]);

// }


// let person = {
//     fName:"mark",
//     lName:"John",
     
//      sayHello () {
//         console.log("Hello! i am " + this.fName +" i have a " + car.brand +" car");
//      }
// };
//  this keyword is used when we are assigning that perticular property in that same object then we use this 

// let car = {
//     brand:'Tata',
//     model:'Safari'
// }
// person.sayHello();


/*------------------------------------------------------------------------------*



//  Math Object ---> some inbuilts method & function are already present in JS

// var x = Math.PI;
// console.log(x);

// //  Always round UP
// var x = Math.round(4.2);
// console.log(x);

// // round up
// var x = Math.ceil(4.6);
// console.log(x);

// // round down
// var x = Math.floor(4.2);
// console.log(x);

// // for finding power value i.e cube of 2--> 8
// var x = Math.pow(2,3);
// console.log(x);


// //  Square root
// var x = Math.sqrt(100);
// console.log(x);

// // return minimum among the list
// var x = Math.min(4 , 100 , -2 , 88 , 102);
// console.log(x);

// // return maximum among the list
// var x = Math.max(4 , 100 , -2 , 88 , 102);
// console.log(x);


/*------------------------------------------------------------------------------*

//  Random 
// generate random number in between 0 to 1 ...
// let x = Math.random();
// console.log(x);

// let y = Math.floor(Math.random() * 10);   // it gives number in btw 0 to 9
// console.log(y);

// let z = Math.floor(Math.random() * 20);   // it gives number in btw 0 to 19
// console.log(z);

// let a = Math.floor(Math.random() * 100);   // it gives number in btw 0 to 99
// console.log(a);

// let b = Math.floor(Math.random() * 10) + 1;   // it gives number in btw 1 to 9
// console.log(b);

// let c = Math.floor(Math.random() * (25 - 15)) + 15;   // it gives number in btw 15 to 25
// console.log(c);

// let d = Math.floor(Math.random() * (50 - 10)) + 10;   // it gives number in btw 50 to 10
// console.log(d);


//  Above code are also write by using function

// function getRandom(min , max){

//     let A = Math.floor(Math.random() * (max - min)) + min;
//     return A;

// }
// console.log(getRandom(10 , 20));

/*------------------------------------------------------------------------------*/


// Date Object in JS

// this type of date variable is not convenient
// let x = 13-09-2022
// let x = 2022-09-13

// So we create one variable under this create Date() Object and it give current date and time like-----> 
// Tue Sep 13 2022 21:44:25 GMT+0530 (India Standard Time)

// let x = new Date();
// console.log(x);

// let y = new Date(2018, 11 , 31 , 10 , 12 , 30 , 7 );
// // let y = new Date(year , month , day , hour , minute , second , milisecond);-->this are the 7 parameters under date object
// console.log(y);


//  we can also write in this form

// let a = new Date("October 10, 2022 11:12:13");
// console.log(a);


//  if we write in it stores some miliseconds also that only MS we can see using getTime() method..... 
// let a = new Date("October 10, 2022 11:12:13");
// console.log(a.getTime());  /*--it gets MS value covnert from 1 Jan 1970 to current date  */

// let a = new Date("October 10, 2022 11:12:13");
// console.log(a.getFullYear()); /*  it gets Full year */

// let a = new Date("October 10, 2022 11:12:13");
// console.log(a.getMonth()); /*  it gets month */

// let a = new Date("October 10, 2022 11:12:13");
// console.log(a.getDate()); /*  it gets DAy */

// let a = new Date("October 25, 2022 11:12:13");
// console.log(a.getDay()); /*  it gets day */

/*<--Jan ---: 0 -->   <--Sun ---: 0 -->*/
/*<--Feb ---: 1 -->   <--Mon ---: 1 -->*/
/*<--Mar ---: 2 -->   <--Tue ---: 2 -->*/
/*<--Apr ---: 3 -->   <--Wed ---: 3 -->*/
/*<--May ---: 4 -->   <--Thru---: 4 -->*/
/*<--June---: 5 -->   <--Fri ---: 5 -->*/
/*<--July---: 6 -->   <--Sat ---: 6 -->*/
/*<--Aug---:  7 -->*/
/*<--Sept---: 8 -->*/
/*<--Oct---:  9 -->*/
/*<--Nov---:  10 -->*/
/*<--Dec---:  11 -->*/


// THIS ARE SOME OTHER METHODS
// a.getHours ()
// a.getMinutes()
// a.getSeconds()
// a.getMilliseconds()

// if i want to change date , year or anything then print for this we USE set function

// let a = new Date("October 25, 2022 11:12:13");
// a.setFullYear(2020);
// console.log(a); /*  it gets new updated or set year */

// THIS ARE SOME OTHER METHODS for set or chnage then print
// a.setDate(parameter)
// a.setMonth(parameter)
// a.setHours (parameter)
// a.setMinutes(parameter)
// a.setSeconds(parameter)
// a.setMilliseconds(parameter)


//  If someone ask find date after 50 days of this date i.e October 25, 2022 find ??  then we set & get both method to find out that day

// let a = new Date("October 25, 2022 11:12:13");
// a.setDate(a.getDate() + 50 )
// console.log(a);

// o/p --->Wed Dec 14 2022 11:12:13 GMT+0530 (India Standard Time)

// let a = new Date("October 25, 2022 11:12:13");
// let b = new Date("October 25, 2022 11:12:13");
// b.setDate(a.getDate() + 50 )
// console.log(a);  /* gets old date */
// console.log(b);  /* gets new date */


//   NOW we compare date i.e find date which is past and future date if both are not then same date will be print

// let x = new Date("October 25, 2021 11:12:13");
// let y = new Date();

// if( y > x){
//     console.log("x is past date");
// }
// else if(x > y){
//     console.log("x is future date");
// }
// else{
//     console.log("x is date date");
// }


/*------------------------------------------------------------------------------*/




// "new" keyword -----> how to use to create object

// var person = {
//     name:"sachin",
//     age:23,
// };

// using new keyword

// var person = new Object();

// person.name = "sachin";
// person.age = 23;

// console.log(person.name);
// console.log(person.age);
// console.log(person);

/*------------------------------------------------------------------------------*/


// Javascript Accessor ----> (Getter and setter)

// getter----->

// var person = {
//     name:"sachin",
//     age:24,

// getname: function (){
//     return this.name.toUpperCase();
// }
// };
// console.log(person.getname);


//  by using get 

// get getname(){
//     return this.name.toUpperCase();
// }
// };
// console.log(person.getname);

// settter------>

// var person = {
//     name:"sachin",
//     age:24,


// set setname(n){
//     this.name = n.toUpperCase();
// }
// };
// person.setname="patle";
// console.log(person);


/*------------------------------------------------------------------------------*/




// Object construction function in js

// Normally we create object like this
// var student1 = {
//     firstName:"scahin",
//     lastName:"patle",
//     age:23,
//     class:5
// }
// var student2 = {
//     firstName:"purushottam",
//     lastName:"patle",
//     age:25,
//     class:3
// }

// after ES6 coming  we can write like this
// OBJECT CONSRUCTION FUNCTION

// function Student (first , last , age , cls) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.class = cls;
// }

// var student1 = new Student("sachin" , "patle" ,23 , 5);
// var student2 = new Student("puru" , "patle" ,20 , 3);
// var student3 = new Student("purushottam" , "patle" ,25 , 7);

// // if we want to add new property in this student1 object 

// student1.nationality = "indian";
// student2.nationality = "indian";
// student3.nationality = "indian";

// console.log(student1);
// console.log(student2);
// console.log(student3);

/*------------------------------------------------------------------------------*/



// Object Prototype

// if i want to add new key or method in in onject so we use prototype

// function Student (first , last , age , cls) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.class = cls;
// }

// var student1 = new Student("sachin" , "patle" ,23 , 5);
// var student2 = new Student("puru" , "patle" ,20 , 3);
// var student3 = new Student("purushottam" , "patle" ,25 , 7);

// // if we want to add new key in this student function we use prototype

// Student.prototype.nationality = "Indian";

// console.log(student1);
// console.log(student2);
// console.log(student3);

/*------------------------------------------------------------------------------*/



// Nested object----> Object under the another objects

// var user = {    /* main object */
//     id:101,
//     email:"abc@gmail.com",
//     personalInfo : {    /* object  1*/
//         name : "sachin",
//         address : {      /* object 2 */
//             city: "Nagpur",
//             Country: "India",
//         }
//     }

// };
// // console.log(user);
// // console.log(user.personalInfo);
// // console.log(user.personalInfo.address);
// console.log(user.personalInfo.address.Country);

/*------------------------------------------------------------------------------*/

// Hoisting in JS----->Hoisting is the process whereby the interpreter appears to move the declaration of function , variables or classes to the TOP of the of their scope , prior to execution of the code...

// For example in function
// hello();

// function hello(){
//     console.log("hello world");
// }

//  In terms of VARIABLES

// var x ; // declaration
// x = 7; // assignment
// console.log(x);  // call

// ----- if we try to call a variable at top then it get undefined value
// bcz in JS var x  = undefined ; // declaration by default in JS thats why

// console.log(x);  // call
// var x ; // declaration
// x = 7; // assignment


// it also gets undefine value of variable
// var x ; // declaration
// console.log(x);  // call
// x = 7; // assignment

/*------------------------------------------------------------------------------*/


/*-----DOCUMENT OBJECT MODEL(DOM)------*/

// The Document Object Model(DOM) is an application programming interface(API) for manipulating HTML and XML documents.(add, remove and modify parts of the document/HTML) 

// When web page is loaded , the browser creates a Documents Object Model of the page

//  Note---> In this DOM tree , the document is the root model or object.

// DOM TREE------> This is DOM tree means hararchy of HTML document

// < !DOCTYPE html >
//     <html>
//         <head>
//             <title>DOM Sample</title>
//             <style type="text/css">
//                 table{
//                     border: 1px solid red;
//         }
//             </style>
//         </head>
//         <body>
//             <table>
//                 <tbody>
//                     <tr>
//                         <td>Some</td>
//                         <td>text</td>
//                     </tr>
//                     <tr>
//                         <td>in a</td>
//                         <td>Table</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </body>
//     </html>


/*
With the object model , Javascript gets all power it needs to create dynamic HTML:  

1) JS can change all the HTML elements in the page.
2) JS can change all the HTML attributes in the page.
3) JS can change all the CSS styles in the  page.
4) JS can remove existing HTML elements and attributes.
5) JS can add new HTML HTML elements and attributes.
6) JS can react to all existing HTML events in the page.
7) JS can create new HTML in the page.. 


Note: In the DOM , all HTML elements are defined as objects . so it will have both property and object..

The document object represent your web pages

If you want to access any elements in an HTML page , you always start with accessing the document object.... 

*/





















