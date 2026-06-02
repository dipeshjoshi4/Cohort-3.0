console.log("Day-5")


// let arr = [10,20,30,40,50];

// arr.push(99);
// arr.push(99)
// console.log(arr) //two times add [10,20,30,40,50,99,99];

// arr.push("Hello");
// console.log(arr) //Hello Add //[10,20,30,40,50,99,99,'hello'];

//?Remove from the last
// arr.pop()
// console.log(arr) // [10,20,30,40,50,99,99];

//?to add first in array we use unshift
// arr.unshift(1)
// console.log(arr) //[1,10,20,30,40,50,99,99];

//?to remove from 1st index
// arr.shift();
// console.log(arr) //[10,20,30,40,50,99,99];

//?INSHORT
/*
push - last main element add
pop - last se remove
shift - starting se remove
unshift - starting main elemet add
*/

// ?push pop shift unshift differens in execution time and if yes then why ? => push pop are faster because all the process happen at the end thats why all other element dont have Affected

//arr.sort() one problem while doing double digits => because in double digits number arr.sort() takess as string and thats why problem comes => so for sort => arr.sort((a,b)=>a-b)

//! T.S. => 59 MIN 

//?splice and slice => for random place to add and remove elements from an array

//?SYNTAX - just delete
// arr.splice(startIndex,deleteCount)

//?SYNTAX - add newItem 
// arr.splice(startIndex,deleteCount,newItem)


// var arr = [10,20,30,40];
// arr[10] = 100;
// console.log(arr)
// console.log(arr.length) //11

// var arr = [10,20,30,40];
// var reverse = arr.reverse();
// console.log(reverse)

// var arr = [10,20,30,40];
// console.log(arr.sort())

var arr = [10,44,90,85,48,100,72,344,4005]; //10,44,48,72,85,90,100,344,4005
console.log(arr.sort()) //10,100,344,4005,44,48,72,85,85,90

//? -> so above in two or more numbers array it took as a string .so only first digit way sort

console.log(arr.sort((a,b)=>(a-b)))
