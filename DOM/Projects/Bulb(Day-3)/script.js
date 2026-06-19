
const bulb = document.querySelector(".bulb");
const button = document.querySelector("button");

// let flag = true;

// button.addEventListener("click",()=>{
//     if(flag){
//         bulb.style.backgroundColor = "yellow";
//         bulb.style.boxShadow = "0 0 15px 5px yellow"
//         button.textContent = "OFF";
//         flag = false
//     }else{
//         bulb.style.backgroundColor = "transparent";
//         bulb.style.boxShadow = "none"
//         button.textContent = "ON";
//         flag = true;
//     }
// })


button.addEventListener("click",()=>{
    if(bulb.classList.toggle("lightUp")){
        button.textContent = "OFF";
    }else{
        button.textContent = "ON";
    }
})