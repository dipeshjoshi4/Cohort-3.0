


//!-----------------------------------------JS DAY-2-PHASE-1--------------------------


//? prompt confirm
// var a = prompt("are you sure?");
// console.log(a)
// console.log(typeof(a)) //?string return

// var b = confirm("this isconfirm");
// console.log(b)
// console.log(typeof(b)) //?boolean return

// var c = alert("are you sure?");
// console.log(c)
// console.log(typeof(c)) //?undefiend return

//?Concatination

// var a = 'Hero';
// var b = "sathak";
// console.log(a+b) //Herosathak

//- string + Anything => making concatination

//?Type Coercion


//?EXPLICIT
//- Explicit -> its called type casting . and it will be intentally doing by You

//?string to Number
// var a = "10";
// var b = "30";
// var a2 = Number(a);
// console.log(typeof(a2)); //number
// console.log(a2*b) //300


//?number to string Convert

// var a = 12;
// console.log(typeof(a),a); //number,12
// var b = String(a);
// console.log(typeof(b),b) //string,12


//? Implicit
//- Implicit -> Automatic Type Converstion 
//- when this 2 value be number but written in string its automatically implicitly convert in number and multiply

// var a = '10';
// var b = '20';
// console.log(a*b) //200

// var x = 'TEN';
// var y = 'TWENTY';
// console.log(x*y) //NaN

// var p = 10;
// var q = 'TWENTY';
// console.log(p*q) //NaN

//? -> Only For the + operation the concatination happen if there is no number

/*
var a = '10';
var b = '20';
console.log(a+b) //1020

var x = 'TEN';
var y = 'TWENTY';
console.log(x+y) //TENTWENTY

var p = 10;
var q = 'TWENTY';
console.log(p+q) //10TWENTY

var l =true;
var M = 'TWENTY';
console.log(l+M) //trueTWENTY
*/



//?Both Are String then 
// var num1 = prompt("give a number1"); //100 as value
// var num2 = prompt("give a number2"); //10 as value
// console.log(num1+num2) //10010
// console.log(num1-num2) //90
// console.log(num1*num2) //1000
// console.log(num1/num2) //10
// console.log(num1%num2) //0

//?Example-1

// var a = Number(prompt("Give Me Number-1"));
// var b = Number(prompt("Give Me Number-2"));
// console.log(a+b)

//!56Min-> Binary Operaters

// increment

//?post incremnt => a = a+1 => a++
// var a = 10;
// console.log(a++) //first use so 10
// console.log(a) //then increment so 11

//?pre-increment
// var a = 10;
// console.log(++a) //first incremnt so 11
// console.log(a) //11

//?post-decrement
// var a = 10;
// console.log(a--); //10
// console.log(a) //9

//?post-increment
// var a = 10;
// console.log(--a); //9
// console.log(a) //9

//?MixExample-1
// var a = 10;
// a++; //11
// --a; //10
// ++a; //11
// console.log(a) //11

//?MixExample-2
// var a = 10;
// a++; //11
// --a; //10
// ++a; //11
// --a; //10
// a++; //11
// a--; //10
// console.log(a) //10


// a = a+1 => a++
// a = a+5 => a += 5