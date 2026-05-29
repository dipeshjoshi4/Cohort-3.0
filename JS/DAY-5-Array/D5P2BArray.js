console.log("Day-5")


let arr = [10,20,30,40,50];

arr.push(99);
arr.push(99)

console.log(arr) //two times add [10,20,30,40,50,99,99];

arr.push("Hello");

console.log(arr) //Hello Add //[10,20,30,40,50,99,99,'hello'];

arr.pop()

console.log(arr) // [10,20,30,40,50,99,99];

//add first we use shift
arr.unshift(1)

console.log(arr) //[1,10,20,30,40,50,99,99];

//to remove from 1st index

arr.shift();

console.log(arr) //[10,20,30,40,50,99,99];


/*
push - last main element add
pop - last se remove
shift - starting se remove
unshift - starting main elemet add

*/

// ?push pop shift unshift differens in execution time and if yes then why ?

// - push pop are faster because all the process happen at the end thats why all other element dont have much affect

//?splice and slice


//arr.sort() one problem while doing double digits => because in double digits number arr.sort() takess as string and thatsy problem comes

// so for sort => arr.sort((a,b)=>a-b)

var arr = 33