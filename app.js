"use strict";

const elForm = document.querySelector(".form");
const elCityInput = document.querySelector(".city");
const elWeatherBody = document.querySelector(".weather_body");

elForm.addEventListener("submit", async (ent) => {
  ent.preventDefault();

  const inputvalue = elCityInput.value;

  const request = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`
  );
  const data = await request.json();
  console.log(data);

  const html = `
    <h2 class="city_name">${data.name}</h2>
    <h2 class="country">County: ${data.sys.country}</h2>
    <p class="weather_deg">${data.main.temp} C</p>
    <p class="pressure">Pressure: ${data.main.pressure}</p>
    <p class="humidity">Humidity: ${data.main.humidity}</p>
    <p class="wind_speed">Speed: ${data.wind.speed}</p>
  `;

  elWeatherBody.insertAdjacentHTML("beforeend", html);

  elCityInput.value = "";
});
