const navlist = document.getElementById("navlist")
const hamburger = document.getElementById("hamburger")

// click Event 
hamburger.addEventListener("hover",()=>{
    navlist.classList.toggle("navlist-active")
})