const weatherApiKey = "d449aa39f9e9a92754a950b512cea493";

/* UI elements */
const weatherCard = document.querySelector(".card")
const userForm = document.getElementById("frm-user-input");
const inputCityName = document.getElementById("input-city-name");

/* card labels */
const lblLocation = document.getElementById("lbl-location");
const lblTemperature = document.getElementById("lbl-temperature");
const lblHumidity = document.getElementById("lbl-humidity");
const lblWeatherDesc = document.getElementById("lbl-weather-desc");
const weatherEmoji = document.getElementById("weather-emoji");

const lblError = document.getElementById("lbl-error");

function getWeatherEmojiIcon(iconCode) {
    switch (iconCode) {
        case "11d":
            return "🌩️"
        case "09d":
            return "🌧️"
        case "10d":
            return "🌦️"
        case "13d":
            return "❄️"
        case "50d":
            return "🌫️"
        case "01d":
            return "☀️"
        case "01n":
            return "🌙"
        case "02d":
            return "⛅"
        case "02n":
            return "☁️"
        case "03d":
            return "☁️"
        case "03n":
            return "☁️"
        case "04d":
            return "☁️"
        case "04n":
            return "☁️"

        
        default:
            return "☁️";
    }
}

function updateCard(weatherData) {
    
    weatherCard.style.display = "block";

    /* unhide all the elements inside the card except the error lablel 
        by setting thier display property to block */
    Array.from(weatherCard.children).forEach(
        (elem) => {
            if(elem.id != "lbl-error") {
                elem.style.display = "block";
            }
            
        }
    );
    /* hide the error label */
    lblError.style.display = "none";

    console.log(weatherData); // for debugging
    

    lblError.style.display = "none";
    lblLocation.innerText = weatherData.name;
    lblTemperature.innerText = `${(weatherData.main.temp - 273.15).toFixed(2)}*C`;
    lblHumidity.innerText = `Humidity: ${weatherData.main.humidity}%`;
    lblWeatherDesc.innerText = `${weatherData.weather[0].description}`;
    weatherEmoji.innerHTML = getWeatherEmojiIcon(weatherData.weather[0].icon);
    return;
}

/* handling the form submit */
userForm.addEventListener(
    "submit",
    async (e) => {
        e.preventDefault();

        if(!inputCityName.value) {
            alert("Please Enter City");
            return;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCityName.value.toLowerCase()}&appid=${weatherApiKey}`;
        
        try {
            const response = await fetch(url);

            if(!response.ok) {
                throw new Error(response.status);
            }

            const weatherData = await response.json();

            updateCard(weatherData);
            return;
        } catch (err) {
            /* set the display of all the element inside the card except the error label to none */
            Array.from(weatherCard.children).forEach(
                (elem) => {
                    if(elem.id != "lbl-error") {
                        elem.style.display = "none";
                    }
                    
                }
            );
            /* unhide the error label */
            lblError.style.display = "block";
        }

    }
);
