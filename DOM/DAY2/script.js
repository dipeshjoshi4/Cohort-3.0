
////?difference between NodeList vs Html Collection 

//- look likes both as array

const body = document.body //select the body

console.log(body.childNodes) // we see the NodeList [text main text script]

console.log(body.children) // we see the HTMLElements [main.element]