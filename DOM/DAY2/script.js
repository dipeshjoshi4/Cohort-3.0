
////?difference between NodeList vs Html Collection 

//- look likes both as array

// const body = document.body //select the body
// console.log(body.childNodes) // we see the NodeList [text main text script]
// console.log(body.children) // we see the HTMLElements [main,script]

//node list -> tree -> sab chiz are node

//html list => point to elements => only elements |||||| but you said node are elements 

// so reason is  nodelist ye sabhi 
// (blank-spaces,white-spaces,line-break => this all are text node) ko node main count karta hai


//?CHANGING IN TEXT COLOR SIZE OR ALL

//textContent => only text
//innerText => all text
//innerHTML

//?ORGINAL ON PAGE IS LIKE =====> <h1> Day-2-DOM STARTER</h1>

// const h1 = document.querySelector("h1");
// h1.textContent = "with js" //with js

// const h1 = document.querySelector("h1");
// h1.innerText = "with js <b> with some tags and text</b>" //as it is  tag will be take as text

// const h1 = document.querySelector("h1");
// h1.innerHTML = "WITH JAVASCRIPT INNERHTML <i> with some tags and text</i>" // the tag you passed work as tag 


//?styling

// const body = document.body;
// body.style.backgroundColor = "red"

// const h1 = document.querySelector("h1");
// h1.style.fontStyle = "italic"
// h1.style.color = "red";

//?Adding class and Id

// const h1 = document.querySelector("h1");



