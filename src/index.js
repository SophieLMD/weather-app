function displayTemperature(response) {
  console.log(response);
  let currentCityElement = document.querySelector("#current-city");
  let currentTemperatureElement = document.querySelector(
    "span#current-temperature-value"
  );
  let currentCity = response.data.city;
  let currentTemperature = Math.round(response.data.temperature.current);
  currentCityElement.innerHTML = currentCity;
  currentTemperatureElement.innerHTML = currentTemperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-text-input");

  let city = searchInputElement.value;
  let apiKey = "tfb34aff78c33f3d839do95056440025";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDate = new Date();
let spanCurrentDate = document.querySelector("span#current-date");
spanCurrentDate.innerHTML = formatDate(currentDate);
