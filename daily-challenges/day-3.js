
// WEEK 6 - DAILY CHALLENGE 3
// Using async/await and try/catch

function getWeather() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const weather = {
                city: "Nairobi",
                temperature: 27,
                condition: "Cloudy"
            };

            resolve(weather);
        }, 1500);
    });
}

async function displayWeather() {
    try {
        console.log("Loading weather information...");

        const weatherData = await getWeather();

        console.log("Weather information received:");
        console.log("City:", weatherData.city);
        console.log("Temperature:", weatherData.temperature + " °C");
        console.log("Condition:", weatherData.condition);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

displayWeather();
