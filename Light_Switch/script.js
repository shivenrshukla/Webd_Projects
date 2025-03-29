let isOpen = false
let btn = document.querySelector(".switch")
let bulbTop = document.querySelector(".bulb-top")
let bulbBottom = document.querySelector(".bulb-bottom")
let sound = document.getElementById("switchSound");

btn.addEventListener("click", function(){
    if(isOpen){
        btn.classList.remove("switch-on")
        bulbTop.classList.remove("bulbOn")
        bulbBottom.classList.remove("bulbOn")  
    } else {
        btn.classList.add("switch-on")
        bulbTop.classList.add("bulbOn")
        bulbBottom.classList.add("bulbOn")
    }
    sound.currentTime = 0;
    sound.play()
    isOpen = !isOpen
});