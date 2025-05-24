let valuesearch = document.getElementById("valuesearch");
let temperature = document.getElementById("temperature");
let city = document.getElementById("city");
let description = document.querySelector(".discription");
let clouds = document.getElementById("clouds");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let form = document.querySelector("form");
let main = document.querySelector("main");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (valuesearch.value != "") {
    searchWeather();
  }
});

let id = "9505fd1df737e20152fbd78cdb289b6a";
let Url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + id;
const searchWeather = () => {
  fetch(Url + "&q=" + valuesearch.value)
    .then((responsive) => responsive.json())
    .then((data) => {
      console.log(data);
      if (data.cod === 200) {
        city.querySelector("figcaption").innerText = data.name;
        city.querySelector("img").src =
          "https://flagsapi.com/" + data.sys.country + "/shiny/32.png";
        temperature.querySelector("img").src =
          "http://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@4x.png";
        temperature.querySelector("figcaption span").innerText =
          data.main.temp + "° C";
        description.innerText = data.weather[0].description;
        clouds.innerText = data.clouds.all;
        humidity.innerText = data.main.humidity;
        pressure.innerText = data.main.pressure;
      } else {
        main.classList.add("error");
        setTimeout(() => {
          main.classList.remove("error");
        }, 1000);
      }
      valuesearch.value = "";
    });
};
