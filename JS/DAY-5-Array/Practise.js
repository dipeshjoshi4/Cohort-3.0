/*
## 1. Array
### Intermediate
Create an array of 5 favorite movies and print all values.
**Hint:** Use indexing
*/

//? const movies = ["spiderMan","Mr.Marvel","IronMan","SuperMan","Antman"]
//? console.log(movies[0],movies[1],movies[2],movies[3],movies[4])
//? console.log(movies)

/*
### Hard
Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.
**Hint:** Mixed data types + nested indexing
*/

//? const arr = [2,"dipesh",true,[5,6,7]];
//? console.log(arr[3])

/*
# 2. Indexing in Array
### Intermediate
Print the first and last element of an array.
**Hint:** Use `0` and `length - 1`
*/

//? const arr2 = [0,5,48,76,98,45,989,56,78];
//? console.log(arr2[0]);
//? console.log(arr2[arr2.length-1]);

/*
### Hard
Swap the second and second-last element using indexing.
**Hint:** Use temporary variable
*/

//? const arr3 = [0,5,48,76,98,45,989,56,78];
//? console.log(arr3[2]);
//? console.log(arr3[arr3.length-2])

/*
# 3. Multi-Dimensional Arrays
### Intermediate
Create a 2D array and print all first elements of inner arrays.
**Hint:** Double indexing
*/

//? const arr4 = [1,2,3,4,5,6,[7,8,9,10]];
//? console.log(arr4[6]) //[7,8,9,10]
//? console.log(arr4[6][0]); // 7
//? console.log(arr4[6][1]); // 8
//? console.log(arr4[6][2]); // 9
//? console.log(arr4[6][3]); // 10

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

//? const matrix = [
//?     [1, 2, 3],
//?     [4, 5, 6],
//?     [7, 8, 9]
//? ]
//? let sum = 0;
//? for (let i = 0; i < matrix.length; i++) {
//?     sum = sum + matrix[i][i];
//? }
//? console.log("Diagonal Matrix of :" ,sum); //15

/*
# 4. length
### Intermediate
Find total elements in an array without counting manually.
**Hint:** Use `.length`
*/

//? const arr5 = [0,5,48,76,98,45,989,56,78];
//? console.log(arr5.length)

/*
### Hard
Create a function that checks whether array length is even or odd.
**Hint:** Use modulus operator
*/

//? function checks(){
//?     const arr5 = [0,5,48,76,98,45,989,56,78];
//?     const answer = arr5.length 
//?     console.log("Length is :",answer)
//?     if(answer % 2 == 0){
//?         console.log("even")
//?     }else{
//?         console.log("odd")
//?     }
//? }
//? checks();

/*
# 5. push()
### Intermediate
Add 3 new elements at the end of array.
**Hint:** Use `push()`
*/
//? let arr6 = ["dipesh","Hardik",5,7,8]
//? arr6.push("Dhwaj");
//? arr6.push(9);
//? arr6.push(10);
//? console.log(arr6)


/*
### Hard
Add elements dynamically inside loop from another array.
**Hint:** Loop + push
*/

//? let arr7 = [1,2,3,4,5,6,7,8];
//? let arr8 = [];
//? for (let i = 0; i < arr7.length; i++) {
//?     arr8.push(arr7[i]);
//? }
//? console.log(arr8);

/*
# 6. pop()
### Intermediat
Remove last element and print removed value.
**Hint:** Store `pop()` result
*/

//? let arr9 = [1,2,3,4,5,6,7,8,9];
//? arr9.pop(); //8
//? console.log(arr9.pop())
//? console.log(arr9)

/*
### Har
Keep removing elements until array becomes empty.
**Hint:** Use `while` loop
*/


//? let arr10 = [1,2,3,4,5,6,7,8,9];
//? for(let i=arr10.length; i>0; i--){
//?     arr10.pop();
//? }
//? console.log(arr10)

//? let arr11 = [1,2,3,4,5,6,7,8,9];
//? while(arr11.length > 0){
//?     arr11.pop()
//? }
//? console.log(arr11)


/*
# 7. unshift()
### Intermediate
Add one username at beginning of array.
**Hint:** Use `unshift()`
*/

//? let username = ["dipesh","max","param","God"]
//? username.unshift("Mahadev")
//? console.log(username)

/*
### Hard
Insert multiple elements at beginning without replacing existing ones.
**Hint:** Multiple arguments
*/

//? let arr12 = [3, 4, 5];
//? arr12.unshift(1, 2);
//? console.log(arr12);

/*
# 8. shift()
### Intermediate
Remove first element from array.
**Hint:** Use `shift()`
*/

//? let arr13 = [1,2,3,4,5,6,7,8];
//? arr13.shift();
//? console.log(arr13)

/*
### Hard
Remove first element repeatedly until only 2 elements remain.
**Hint:** Loop + length check
*/

//? let arr14 = [1,2,3,4,5,6,7,8];
//? while (arr14.length > 2){
//?     arr14.shift();
//? }
//? console.log(arr14)


/*
# 9. splice()
### Intermediate
Remove 2 elements from middle of array.
**Hint:** `splice(start, deleteCount)`
*/

//? let arr15 = [1,20,355,45,5,6,7,89,30];
//? arr15.splice(4,2)
//? console.log(arr15) //[1,20,355,45,7,89,30]

/*
### Hard
Replace 3 middle elements with 5 new values.
**Hint:** Use insertion with splice
*/

//? let arr16 = [1,22,355,45,5,6,7,89,38];
//? arr16.splice(3,3,10,20,30,40,50);
//? console.log(arr16)

/*
# 10. reverse()
### Intermediate
Reverse an array using method.
**Hint:** Use `reverse()`
*/

//?  let arr17 = [1,22,355,45,5,6,7,89,38];
//?  arr17.reverse();
//?  console.log(arr17)

/*
### Hard
Reverse only first half of array.
**Hint:** Manual swapping
*/

//? let arr18 = [1,22,355,45,5,6,7,89,38,40];
//? let firstHalf = arr18.slice(0,5).reverse();
//? let secondHalf = arr18.slice(5)
//? let result = firstHalf.concat(secondHalf);
//? console.log(result);

/*
# 11. sort()
### Intermediate
Sort numbers in ascending order.
**Hint:** Compare function
*/

//? let arr19 = [1,22,355,45,5,6,7,89,38,40];
//? let sortArray = arr19.sort((a,b)=>a-b);
//? console.log(sortArray)

/*
### Hard
Sort array so even numbers come first and odd later.
**Hint:** Custom compare logic
*/

//? let arr20 = [1,22,355,45,5,6,7,89,38,40];
//? let arrOdd = []
//? let arrEven = [];
//? for(let i=0; i<arr20.length; i++){
//?     if(arr20[i] % 2 === 0){
//?         arrEven.push([arr20[i]]);
//?     }else{
//?         arrOdd.push([arr20[i]]);
//?     }
//? }
//? let result = arrEven.concat(arrOdd)
//? console.log(result) //22 6 38 40 1 355 45 5 7 89

/*
# 12. slice()
### Intermediate
Extract first 4 elements into new array.
**Hint:** Use `slice()`
*/

//? let arr21 = [1,2,3,4,5,6,7,8,9];
//? const ans = arr21.slice(0,4);
//? console.log(ans)


/*
### Hard
Create a copy excluding first and last element.
**Hint:** Use start and end indexes
*/

//? let arr22 = [1,2,3,4,5,6,7]
//? const last = arr22.slice(1,6)
//? console.log(last)

/*
# 13. concat()
### Intermediate
Merge two arrays.
**Hint:** Use `concat()`
*/

//? let arr23 = [1,2,3,4,5];
//? let arr24 = [6,7,8,9,10];
//? let answer = arr23.concat(arr24)
//? console.log(answer)

/*
### Hard
Merge 3 arrays and remove duplicate values.
**Hint:** Combine + loop/includes
*/

//? let arr25 = [1, 2, 3, 4];
//? let arr26 = [3, 4, 5, 6];
//? let arr27 = [5, 6, 7, 8];
//? let merged = [...arr25,...arr26,...arr27];
//? let unique = [];
//? for(let i=0; i<merged.length; i++){
//?         if(!unique.includes(merged[i])){
//?                 unique.push(merged[i])
//?         }
//? }
//? console.log(unique)


/*
# 14. includes()
### Intermediate
Check whether `"apple"` exists in array.
**Hint:** Use boolean result
*/

//? let arr28 = ["orange","apple","Mango","Banana"];
//? let arr29 = arr28.includes("apple")
//? console.log(arr29)

/*
### Hard
Check if all elements of one array exist inside another.
**Hint:** Loop + includes
*/

//? let arr30 = [1,2,3,4,5,6,7,8,9];
//? let arr31 = [2,4,6]
//? let allExist = true;
//? for(let i=0; i<arr30.length; i++){
//?         if(!arr30.includes(arr31[i])){
//?                 allExist = false;
//?                 break;
//?         }
//? }
//? console.log(allExist)

/*
# 15. indexOf()
### Intermediate
Find index of `"Rahul"` in array.
**Hint:** Use `indexOf()`
*/


/*
### Hard
Find all positions of repeated number `5`.
**Hint:** Loop through entire array
*/

/*
# 16. join()
### Intermediat
Convert array into comma separated string.
**Hint:** Use `join(",")`
*/


/*
### Hard
Convert array into sentence format.
**Hint:** Join with spaces
*/


/*
# 17. for loop
### Intermediate
Print all array elements using loop.
**Hint:** Loop through indexes
*/


/*
### Hard
Print elements at only even indexes.
**Hint:** Increase loop smartly
*/


/*
# 18. for...of
### Intermediat
Print all values using `for...of`.
**Hint:** Direct value iteration
*/


/*
### Hard
Count vowels from array of characters.
**Hint:** Use conditions inside loop
*/


/*
# 19. Reference Behaviour of Array
### Intermediate
Assign one array to another variable and modify second one.
**Hint:** Observe original array
*/


/*
### Hard
Create true copy so original array does not change.
**Hint:** Use spread operator
*/

/*
# 20. Spread Operator
### Intermediate
Copy array into new array.
**Hint:** Use `...`
*/

/*
### Hard
Merge arrays and add extra values in between.
**Hint:** Combine spread carefully
*/