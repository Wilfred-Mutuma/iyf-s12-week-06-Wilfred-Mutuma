
// WEEK 6 - WEATHER DASHBOARD
// OpenWeatherMap API + Fetch + Async/Await + Local Storage

// 1. SELECT HTML ELEMENTS

const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");
const weatherDisplay = document.getElementById("weatherDisplay");

const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weatherDescription");

const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const pressure = document.getElementById("pressure");

const recentSearches = document.getElementById("recentSearches");

// 2. GET API KEY

const API_KEY = window.OPENWEATHER_API_KEY;

// 3. SHOW WEATHER INFORMATION

function displayWeather(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;

    temperature.textContent = `${Math.round(data.main.temp)} °C`;

    weatherDescription.textContent = data.weather[0].description;

    weatherIcon.src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherIcon.alt = data.weather[0].description;

    feelsLike.textContent = `${Math.round(data.main.feels_like)} °C`;

    humidity.textContent = `${data.main.humidity}%`;

    windSpeed.textContent = `${data.wind.speed} m/s`;

    pressure.textContent = `${data.main.pressure} hPa`;

    weatherDisplay.classList.remove("hidden");
}

// 4. SAVE RECENT SEARCHES

function saveRecentSearch(city) {
    let searches = JSON.parse(localStorage.getItem("recentSearches")) || [];

    // Avoid duplicate city names
    searches = searches.filter(
        item => item.toLowerCase() !== city.toLowerCase()
    );

    // Put the latest search first
    searches.unshift(city);

    // Keep only the latest five searches
    searches = searches.slice(0, 5);

    localStorage.setItem("recentSearches", JSON.stringify(searches));

    displayRecentSearches();
}

// 5. DISPLAY RECENT SEARCHES

function displayRecentSearches() {
    const searches = JSON.parse(localStorage.getItem("recentSearches")) || [];

    recentSearches.innerHTML = "";

    searches.forEach(city => {
        const listItem = document.createElement("li");

        listItem.textContent = city;

        // Click a previous city to search again
        listItem.addEventListener("click", () => {
            cityInput.value = city;
            getWeather(city);
        });

        recentSearches.appendChild(listItem);
    });
}

// 6. FETCH WEATHER USING ASYNC/AWAIT

async function getWeather(city) {

    // Check that an API key exists
    if (!API_KEY || API_KEY === "PASTE_YOUR_API_KEY_HERE") {
        errorMessage.textContent =
            "API key missing. Please check your config.js file.";

        errorMessage.classList.remove("hidden");
        return;
    }

    // Show loading message
    loading.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    weatherDisplay.classList.add("hidden");

    searchBtn.disabled = true;

    try {

        // OpenWeatherMap API URL
        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

        // Send GET request
        const response = await fetch(url);

        // Handle unsuccessful responses
        if (!response.ok) {

            if (response.status === 404) {
                throw new Error("City not found. Please check the city name.");
            }

            if (response.status === 401) {
                throw new Error(
                    "Invalid API key or the key is not active yet. Please check again."
                );
            }

            throw new Error("Unable to get weather information. Please try again.");
        }

        // Convert response into JSON
        const data = await response.json();

        // Display weather information
        displayWeather(data);

        // Save the successful search
        saveRecentSearch(data.name);

    } catch (error) {

    // Display a clear message when there is no internet
    if (!navigator.onLine || error instanceof TypeError) {
        errorMessage.textContent =
            "No internet connection. Please check your network and try again.";
    } else {
        errorMessage.textContent = error.message;
    }

    errorMessage.classList.remove("hidden");

} finally {

        // Hide loading and enable button again
        loading.classList.add("hidden");
        searchBtn.disabled = false;
    }
}

// 7. HANDLE SEARCH FORM

weatherForm.addEventListener("submit", event => {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (city === "") {
        errorMessage.textContent = "Please enter a city name.";
        errorMessage.classList.remove("hidden");
        return;
    }

    getWeather(city);
});

// 8. LOAD RECENT SEARCHES WHEN PAGE OPENS

displayRecentSearches();
