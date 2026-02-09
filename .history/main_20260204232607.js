const navlist = document.getElementById("navlist")
const hamburger = document.getElementById("hamburger")

// click Event 
hamburger.addEventListener("click",()=>{
    navlist.classList.toggle("navlist-active")
})
let num1="1"
let num2=1
let rusalt= num1+num2