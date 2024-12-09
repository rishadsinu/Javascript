const apiKey = "ed79a1ab81df2b268f0daf833b82015f";
const getWeatherButton = document.getElementById("getWeather");
const cityInput = document.getElementById("city");
const weatherResult = document.getElementById("weatherResult");

getWeatherButton.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) {
        weatherResult.innerHTML = "Please enter a city name.";
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            weatherResult.innerHTML = "City not found. Please try again.";
            return;
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherResult.innerHTML = "An error occurred. Please try again.";
        console.error(error);
    }
});

function displayWeather(data) {
    const { name, main, weather } = data;
    weatherResult.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Feels Like: ${main.feels_like}°C</p>
        <p>Weather: ${weather[0].description}</p>
    `;
}
