const api_key = "340677cb6d7066e64bdaa44b46a6f727";
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const city = document.getElementById("city").value.trim();
    const result = document.getElementById("result");
    if (city === "") {
        result.innerHTML = "<p>Please enter a city name</p>";
        return;
    }
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                result.innerHTML = "<p>City Not Found</p>";
            } else {
                result.innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>🔥 Temperature: ${data.main.temp} °C</p>
                    <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
                    <p>🌥️ Weather: ${data.weather[0].description}</p>
                `;
            }
        })
        .catch(error => {
            result.innerHTML = "<p>Error fetching weather data</p>";
            console.error(error);
        });
});
