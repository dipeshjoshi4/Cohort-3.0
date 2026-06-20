
//!Attributes and properties

// const h3 = document.querySelector("#id1");

// let res = h3.getAttribute("id")  //getting attribute from the element
// let res1 = h3.getAttribute("class")

// console.log(res) //id1
// console.log(res1) //c1 c2 c3

// h3.setAttribute("Width","200px"); //setting a new attribute

// let res3 = h3.getAttribute("Width");

// console.log(res3); //200px 

// h3.removeAttribute("class") //remove class

// let res6 = h3.hasAttribute("class") //checking the given attribute have in element
// console.log(res6)


//! -----------------data-attributename------------------
//html only validate default attributes
//when you have to use custome attribute then only we use this => data-attribute-name

//?example

// const userCard = document.querySelector("#user_card"); //select

// let res5 = userCard.getAttribute("data-user-id");
// console.log(res5) //123

// userCard.dataset.userId = "678" //chnage id with different way 

// console.log(userCard.getAttribute("data-user-id")); //678


//!50:00
//! input.value vs input.getAttribute('value')

const input = document.querySelector("input");
const btn = document.querySelector("button")

//taking input core value. which user give
btn.addEventListener("click",()=>{
    console.log(input.value)
})