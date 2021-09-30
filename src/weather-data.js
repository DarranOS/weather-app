// Todo push the new weather data to the mainview.

const displayWeather = (data) => {
  const body = document.getElementById("app");
  const renderWeather = () => {
    const weatherDisplayDiv = document.createElement("div");
    weatherDisplayDiv.classList.add("weather-display");

    const heading = document.createElement("h3");
    heading.textContent = data.weather[0].description;
    weatherDisplayDiv;

    return weatherDisplayDiv.appendChild(heading);
  };

  body.appendChild(renderWeather());
  console.dir(data.weather[0].description);
};

export default displayWeather;
