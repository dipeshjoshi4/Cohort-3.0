console.log("Hello Day-4-phase-2-Function");

// function greet(age,name){
//     console.log("Hello Evening",name)
//     if(age>18){
//         console.log("Allowed")
//     }else{
//         console.log("Not Allowed")
//     }
// }
// greet(12,'dipesh');

//?Arrow Function

// var a = () => console.log("hello from arrow")
// a()

// var d = (a,b,c) => console.log("hello from dipesh arrow",a,b,c)
// d(5,9,10)

//?Function Declaration
// function greet() {
//     console.log("hello")
// }
// greet()

//?Function Expression
// var a = function(){
//     console.log("dipesh")
// }
// a()

// var ee = () => console.log("your the hero")
// ee()

//? IIFE - immediately invoked function expression

//?Ex-1
// (function() {
//     console.log("i am a hero !");
// }) ()

//?Ex-2
// (()=>console.log("Hello!"))()

//?Impure Function

//?ex-1
// var a = 10;
// function abc(){
//     a++;
//     return a;
// }
// console.log(abc());
// console.log(abc());

//?ex-2
// let a = 10;
// function abc(){
//     a++;
//     console.log(a);
// }
// console.log(abc()); //?11 undefiend
// console.log(abc()); //?12 undefiend => because function dont give any return and your console the fun() so 12 and undefiend

// function a(){
//     return 10
// }

// console.log(a())

//?Callback function

// function footpath(len){
//     console.log("i am the footpath",len);
// }

// function mainRoad(wid,cb){
//     console.log("this is main road",wid,"foot");
//     cb(wid/10)
// }
// mainRoad(80,footpath)

//?Higher Order Function


//?Example-1
// function parent(){
//     console.log("i am parent...");

//     function child(){
//         console.log("i am child....")
//     }
//     return child
// }

// parent()();

//?Example-2
// function dada() {
//   console.log("i am dada");
//   function papa() {
//     console.log("i am papa");
//     function child() {
//       console.log("i am child");
//     }
//     return child;
//   }
//   return papa;
// }
// dada()()()