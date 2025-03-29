// http://api.weatherapi.com/v1/current.json?key=133d11cb29b44a1cb76145435250202&q=Mumbai&aqi=no

// constant variable store specific informations from the API extracted by querySelector(can also 
// use getelementbyid or class)
const temperatureField = document.querySelector(".temp")
const locationField = document.querySelector(".timelocation p")
const dateField = document.querySelector(".timelocation span")
const weatherField = document.querySelector(".condition p")
const searchField = document.querySelector(".searchArea")
const form = document.querySelector("form")

// event listener that is called on submission of the button, calls searchForLocation function
form.addEventListener("submit", searchForLocation)

// default location
let targetLocation = `Mumbai`

//fetchResults function fetches the actual information from the weather API depending on the targetLocation
const fetchResults = async(targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=133d11cb29b44a1cb76145435250202&q=${targetLocation}&aqi=no`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    let locationName = data.location.name
    console.log(locationName)

    let time = data.location.localtime
    let temp = data.current.temp_c
    let condition = data.current.condition.text

    updateDetails(temp, locationName, time, condition)
}

//update the text content of the html file
function updateDetails(temp, locationName, time, condition){

    let splitDate = time.split(" ")[0];
    let splitTime = time.split(" ")[1];

    let currentDay = getDayName(new Date(splitDate).getDay());
    temperatureField.innerText = temp + String.fromCharCode(176) + "C"
    locationField.innerText = locationName
    dateField.innerText = `${splitDate} ${currentDay} ${splitTime}`
    weatherField.innerText = condition
}

//targetLocation must be updated by the value inserted in the search field
function searchForLocation(e){
    e.preventDefault()
    targetLocation = searchField.value
    fetchResults(targetLocation)
}

function getDayName(number) {
    switch(number){
        case 0:{
            return 'Sunday';
        }
        case 1:{
            return 'Monday';
        }
        case 2:{
            return 'Tuesday';
        }
        case 3:{
            return 'Wednesday';
        }
        case 4:{
            return 'Thursday';
        }
        case 5:{
            return 'Friday';
        }
        case 6:{
            return 'Saturday';
        }
    }
}