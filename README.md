# Week 6 – Asynchronous JavaScript

**Student:** Wilfred Mutuma  
**GitHub:** [Wilfred-Mutuma](https://github.com/Wilfred-Mutuma)  
**Course:** IYF Weekend Academy – Season 12  
**Week:** 6

## Project Overview

This repository contains my Week 6 JavaScript exercises and Weather Dashboard mini-project.

The work focuses on asynchronous JavaScript, callbacks, Promises, async/await, Fetch API, and working with external APIs.

## Repository Structure

```text
iyf-s12-week-06-Wilfred-Mutuma/
│
├── lesson-11/
│   ├── async-practice.js
│   └── promises-practice.js
│
├── lesson-12/
│   ├── fetch-practice.html
│   └── fetch-practice.js
│
├── index.html
├── styles.css
├── app.js
├── config.example.js
├── .gitignore
└── README.md
```

## Lessons Completed

### Lesson 11: Asynchronous JavaScript

- Synchronous and asynchronous JavaScript
- Callbacks and callback patterns
- Callback hell
- Promises and Promise chaining
- Promise.all() and Promise.race()
- Async/await
- Error handling with try/catch
- Parallel execution

### Lesson 12: Fetch API

- Fetching data from an API
- Converting responses to JSON
- Displaying API data in the DOM
- Loading and error messages
- Searching and filtering data
- Sending POST requests

## Weather Dashboard

The Weather Dashboard uses the OpenWeatherMap API to retrieve current weather information for different cities.

### Features

- Search weather by city.
- Display temperature in Celsius.
- Display weather descriptions and icons.
- Display feels-like temperature.
- Display humidity, wind speed and pressure.
- Handle invalid city names and API errors.
- Display loading messages.
- Store the five most recent successful searches using localStorage.
- Allow users to search again using recent searches.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- OpenWeatherMap API
- Browser localStorage
- Git and GitHub

## Running the Project

1. Clone the repository.
2. Open the project in Visual Studio Code.
3. Copy `config.example.js` and rename the copy to `config.js`.
4. Add your own OpenWeatherMap API key to `config.js`.
5. Open `index.html` using VS Code Live Server.

**Important:** Never upload your real API key. The `.gitignore` file excludes `config.js`.

## Learning Outcome

This project demonstrates my understanding of asynchronous JavaScript and how to retrieve, process and display external API data in a web application.
