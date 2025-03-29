let currentSlide = 0
let slides = document.querySelectorAll(".slide")
let prevBtn = document.querySelector(".prev")
let nextBtn = document.querySelector(".next")

function next(){
    slides[currentSlide].style.display = "none"
    
    nextSlide = (currentSlide+1)%slides.length
    slides[nextSlide].style.display = "block"

    currentSlide = (currentSlide+1)%slides.length
}

nextBtn.addEventListener("click", next)

prevBtn.addEventListener("click", function(){
    slides[currentSlide].style.display = "none"
    
    nextSlide = ((currentSlide) + slides.length - 1)%slides.length
    slides[nextSlide].style.display = "block"

    currentSlide = ((currentSlide) + slides.length - 1)%slides.length
})

setInterval(next, 10000)