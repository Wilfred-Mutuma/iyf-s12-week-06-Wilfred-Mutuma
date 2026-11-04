# Week 6 – Asynchronous JavaScript

**Student:** Wilfred Mutuma  
**GitHub:** [Wilfred-Mutuma](https://github.com/Wilfred-Mutuma)  
**Course:** IYF Weekend Academy – Season 12  
**Week:** 6

## Live Demo

Try the deployed Weather Dashboard here:

[Open Weather Dashboard](https://wilfred-mutuma.github.io/iyf-s12-week-06-Wilfred-Mutuma/)

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

## Daily Challenges

The five daily challenges demonstrate the concepts covered during Week 6.

| Day | Challenge | Concepts |
|---|---|---|
| Day 1 | Asynchronous JavaScript | setTimeout and execution order |
| Day 2 | Student Information | Promises and resolve |
| Day 3 | Weather Information | Async/await and try/catch |
| Day 4 | Fetch Users | Fetch API and JSON |
| Day 5 | Student Details | Promise.all() and parallel execution |

All five daily challenge files were executed successfully using Node.js.

## Lesson 12 Practice

The `lesson-12/` folder contains Fetch API exercises covering:

- Fetching one user.
- Fetching multiple users.
- Searching and filtering users.
- Handling loading and error states.
- Creating a user with a POST request.

## Learning Outcome

This project demonstrates my understanding of asynchronous JavaScript and how to retrieve, process and display external API data in a web application.

## Testing

The Weather Dashboard was tested to verify that its main features and error handling work correctly.

| Test | Expected result | Result |
|---|---|---|
| Search for Nairobi | Display current weather information | Passed |
| Search for an invalid city | Display a city-not-found error | Passed |
| Test without an internet connection | Display a network error message | Passed |
| Submit an empty city field | Display a validation message | Passed |

The Lesson 11 exercises and all five daily challenges were also executed successfully using Node.js.