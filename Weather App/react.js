async function getWeather(){

let city = document.getElementById("city").value;

if(city === ""){
alert("Please enter city name");
return;
}

let apiKey = "e4fc9a98f1044e97eb4155a65a034bd3";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let response = await fetch(url);

let data = await response.json();

if(data.cod == "404"){
alert("City not found");
return;
}

document.getElementById("cityName").innerText = data.name;

document.getElementById("temperature").innerText =
"Temperature: " + data.main.temp + " °C";

document.getElementById("description").innerText =
"Weather: " + data.weather[0].description;

document.getElementById("humidity").innerText =
"Humidity: " + data.main.humidity + "%";

}