const carousel = document.querySelector(".card-container");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right")


let pressed = false;
let wait = false;
let startX;
let x;
const speed = 100
const autoSpeed = 300

carousel.scrollLeft = Math.random() * carousel.scrollWidth

const interval = setInterval(() => {
    if(pressed) {
        wait = true;
        return;
    }
    if(wait) {
        wait = false;
        return;
    }
    let moveTo = carousel.scrollLeft + autoSpeed
    moveTo > carousel.clientWidth ? moveTo = 0 : null;
    carousel.scrollLeft = moveTo
    console.log(moveTo, carousel.clientWidth)
}
, 5000);


carousel.addEventListener("mousedown", (e) => {
    pressed = true;
    wait = true;
    carousel.style.cursor = "grabbing";
    startX = e.offsetX
    console.log("startX",startX)
})

carousel.addEventListener("mouseup", (e) => {
    carousel.style.cursor = "grab"
    pressed = false;
})

carousel.addEventListener("mousemove", (e) => {
    if(!pressed) return
    e.preventDefault()

    x = startX - e.offsetX;
    x < -speed ? x = -speed : x > speed ? x = speed : null;
    carousel.scrollLeft -= x;
})

arrowLeft.addEventListener("click", () => {
    carousel.scrollLeft -= autoSpeed
})

arrowRight.addEventListener("click", () => {
    carousel.scrollLeft += autoSpeed
})