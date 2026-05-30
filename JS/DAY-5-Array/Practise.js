/*
## 1. Array
### Intermediate
Create an array of 5 favorite movies and print all values.
**Hint:** Use indexing
*/


const movies = ["spiderMan","Mr.Marvel","IronMan","SuperMan","Antman"]
console.log(movies[0],movies[1],movies[2],movies[3],movies[4])
console.log(movies)

/*
### Hard
Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.
**Hint:** Mixed data types + nested indexing
*/

const arr = [2,"dipesh",true,[5,6,7]];
console.log(arr[3])

/*
# 2. Indexing in Array
### Intermediate
Print the first and last element of an array.
**Hint:** Use `0` and `length - 1`
*/

const arr2 = [0,5,48,76,98,45,989,56,78];
console.log(arr2[0]);
console.log(arr2[arr2.length-1]);

/*
### Hard
Swap the second and second-last element using indexing.
**Hint:** Use temporary variable
*/

const arr3 = [0,5,48,76,98,45,989,56,78];
console.log(arr3[2]);
console.log(arr3[arr3.length-2])

/*
# 3. Multi-Dimensional Arrays
### Intermediate
Create a 2D array and print all first elements of inner arrays.
**Hint:** Double indexing
*/

const arr4 = [1,2,3,4,5,6,[7,8,9,10]];
console.log(arr4[6]) //[7,8,9,10]
console.log(arr4[6][0]); // 7
console.log(arr4[6][1]); // 8
console.log(arr4[6][2]); // 9
console.log(arr4[6][3]); // 10

/*
### Hard
Find the sum of all diagonal elements in a 3x3 matrix.
**Hint:** Same row and column index
*/

/*
        0  1  2
Row 0  [1, 2, 3]
Row 1  [4, 5, 6]
Row 2  [7, 8, 9]
*/

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let sum = 0;
for (let i = 0; i < matrix.length; i++) {
    sum = sum + matrix[i][i];
}
console.log("Diagonal Matrix of :" ,sum); //15

/*
# 4. length
### Intermediate
Find total elements in an array without counting manually.
**Hint:** Use `.length`
*/

const arr5 = [0,5,48,76,98,45,989,56,78];
console.log(arr5.length)


/*
### Hard
Create a function that checks whether array length is even or odd.
**Hint:** Use modulus operator
*/

function checks(){
    const arr5 = [0,5,48,76,98,45,989,56,78];
    const answer = arr5.length 
    console.log("Length is :",answer)
    if(answer % 2 == 0){
        console.log("even")
    }else{
        console.log("odd")
    }
}
checks();


/*
# 5. push()
### Intermediate
Add 3 new elements at the end of array.
**Hint:** Use `push()`
*/
let arr6 = ["dipesh","Hardik",5,7,8]
arr6.push("Dhwaj");
arr6.push(9);
arr6.push(10);
console.log(arr6)


/*
### Hard
Add elements dynamically inside loop from another array.
**Hint:** Loop + push
*/
let arr7 = [1,2,3,4,5,6,7,8];
let arr8 = [];
for (let i = 0; i < arr7.length; i++) {
    arr8.push(arr7[i]);
}
console.log(arr8);

/*
# 6. pop()
### Intermediat
Remove last element and print removed value.
**Hint:** Store `pop()` result
*/

let arr9 = [1,2,3,4,5,6,7,8,9];
arr9.pop(); //8
console.log(arr9.pop())
console.log(arr9)

/*
### Har
Keep removing elements until array becomes empty.
**Hint:** Use `while` loop
*/


let arr10 = [1,2,3,4,5,6,7,8,9];
for(let i=arr10.length; i>0; i--){
    arr10.pop();
}
console.log(arr10)

let arr11 = [1,2,3,4,5,6,7,8,9];
while(arr11.length > 0){
    arr11.pop()
}
console.log(arr11)


/*
# 7. unshift()
### Intermediate
Add one username at beginning of array.
**Hint:** Use `unshift()`
*/
let username = ["dipesh","max","param","God"]
username.unshift("Mahadev")
console.log(username)

/*
### Hard
Insert multiple elements at beginning without replacing existing ones.
**Hint:** Multiple arguments
*/

let arr12 = [3, 4, 5];
arr12.unshift(1, 2);
console.log(arr12);