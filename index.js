const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
var anmt = document.querySelectorAll("#bg")

anmt.forEach(pp => {
    btn1.addEventListener("click", () => {
        pp.style.animationPlayState = "running"
    })
    
    btn2.addEventListener("click", () => {
        pp.style.animationPlayState = "paused"
    })
})

