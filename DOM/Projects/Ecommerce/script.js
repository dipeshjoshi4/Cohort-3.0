const createBtn = document.querySelector("#create")
const formDiv = document.querySelector(".form");
const closeBtn = document.querySelector("#close");

createBtn.addEventListener("click",()=>{
    formDiv.style.display = "flex"
})

closeBtn.addEventListener("click",()=>{
    formDiv.style.display = "none"
})