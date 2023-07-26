const apiKey = require("./apiKey");
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let weatherData = null;

/*fetch(apiUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData.main.temp)
    console.log(weatherData['weather'][0]['main'])
  })
  .then(console.log("end of data"))
  ;


console.log('Requesting weather data');*/

class WeatherClient {
  async fetchWeatherData(city, api) {
    const response = await fetch(apiUrl + city + "&appid=" + api);
    const data = await response.json();
    return data;
  }
}

class Weather {
  constructor(client) {
    (this.client = client), (this.data = {});
  }

  load(city) {
    this.data = this.client.fetchWeatherData(city, apiKey);
  }

  getWeatherData() {
    return `Name: ${this.data.name}, Temperature: ${this.data.main.temp}`;
  }
}

module.exports = Weather;
