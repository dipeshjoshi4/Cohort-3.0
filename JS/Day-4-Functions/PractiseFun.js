/*
# Part 1 — Functions Basics (1–20)

## Beginner Level

1. Create a function named `greet` that prints `"Hello World"`.
2. Create a function `add(a, b)` that returns the sum.
3. Write a function to calculate the square of a number.
4. Create a function that checks whether a number is even or odd.
5. Write a function that converts Celsius to Fahrenheit.
6. Create a function with default parameter `"Guest"`.
7. Write a function that returns the greater of two numbers.
8. Create a function to calculate area of rectangle.
9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
10. Create a function to reverse a string.
*/

//?1. Create a function named `greet` that prints `"Hello World"`.
// function greet(){
//     console.log("Hello World")
// }
// greet();

//?2. Create a function `add(a, b)` that returns the sum.
// function add(a,b){
//     return a+b;
// }
// var sum = add(10,20)
// console.log(sum)

//?3. Write a function to calculate the square of a number.

// function square(a){
//     console.log(a*a)
// }
// square(6);

//? 4. Create a function that checks whether a number is even or odd.

// function checkNumber(num){
//     if(num%2==0){
//         console.log("number is even")
//     }else{
//         console.log("number is odd")
//     }
// }
// checkNumber(19)

//?5. Write a function that converts Celsius to Fahrenheit.

// function Feren(num){
//     let c = num;
//     let ans = (c*9/5)+32
//     console.log(ans)
// }
// Feren(20)
// Feren(1)

//?6. Create a function with default parameter `"Guest"`.

//?Ex-1
// function defaultFun(a=200,b){
//     console.log(a+b)
// }
// defaultFun(undefined,20)

//?Ex-2
// function defaultFun2(a,b=20){
//     console.log(a+b)
// }
// defaultFun2(20)

//? 7. Write a function that returns the greater of two numbers.

// function greaterNumber(a,b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// var ans = greaterNumber(10,20)
// console.log(ans)

//? 8. Create a function to calculate area of rectangle.

// function area(l,b){
//     console.log(l*b)
// }
// area(10,20)

//?9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.

// function FindYourAge(age){
//     if(age>=18){
//         return "Adult"
//     }else{
//         return "Minor"
//     }
// }

// console.log(FindYourAge(10))

// var verdict = FindYourAge(20)
// console.log(verdict)

//? 10. Create a function to reverse a string.

// function reverseString(str){
//    str =  str.split("")
//    str = str.reverse()
//     str = str.join("")
//     return str;
// }
// let ans = reverseString("hsepid");
// console.log(ans)

/*


## Intermediate Level

1. Write a function expression for multiplication.
2. Convert a normal function into an arrow function.
3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
4. Write a function that counts vowels in a string.
5. Create a function that checks if a string is palindrome.
6. Write a callback function example using `setTimeout`.
7. Create a higher-order function that executes another function twice.
8. Write a function that returns another function.
9. Create a pure function for subtraction.
10. Create an impure function using global variable modification.
*/

//?1. Write a function expression for multiplication.

// var multiplication = function(a,b){
//     return a* b;
// }
// var ans = multiplication(10,20) 
// console.log(ans)

//?2. Convert a normal function into an arrow function.

// function add(a,b){
//     console.log(a+b)
// }
// add(10,20)

// var add2 = (a,b) =>console.log(a+b);
// add2(10,20)

//?3.Create a function that accepts unlimited numbers and returns their sum using rest operator.

// function Numbers(...numbers){
//     let sum = 0;
//     for(let i=0; i<numbers.length;i++){
//         sum = sum+numbers[i];
//     }
//     return sum
// }
// console.log(Numbers(10,40,80,90,50,40)) //?310