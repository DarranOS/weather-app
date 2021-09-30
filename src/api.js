import { default as displayWeather } from "./weather-data";
import { default as errorMessage } from "./error-message";
const regeneratorRuntime = require("regenerator-runtime");

// The mainview module passes the searched city, town, etc (input)
export default function api(input) {
  const generateURL = () => {
    const cleanedInput = input.replace(/\s/g, "").toLowerCase();
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    const searchParams = "?q=" + cleanedInput;
    const apiKey = "&appid=4ca6f83bfdd0fc5ee03e1be1cdd81deb";
    const url = baseUrl + searchParams + apiKey;

    // Returns an object with a single URL and an input record for the fetchWeather (target)
    return { url, input };
  };

  async function fetchWeather(target) {
    try {
      const response = await fetch(target.url);
      const weatherPackage = await response.json();
      displayWeather(weatherPackage);
    } catch (err) {
      errorMessage(target, err);
    }
    // Passes to module "weather-data"
  }

  fetchWeather(generateURL());
}
