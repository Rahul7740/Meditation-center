let show = document.getElementById("popup-show")
let close = document.querySelector(".popup-close-btn")
let popup = document.querySelector(".popup-div")

show.addEventListener("click",()=>{
    popup.classList.add("popup-css-active")
    show.classList.add("hide")
    close.classList.add("close-bnt-show")
})
close.addEventListener("click",()=>{
    popup.classList.remove("popup-css-active")
    show.classList.remove("hide")
    close.classList.remove("close-bnt-show")
})