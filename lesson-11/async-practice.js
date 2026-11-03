
// WEEK 6 - LESSON 11
// TASK 11.1 - UNDERSTANDING ASYNC

// EXERCISE 1: SYNCHRONOUS JAVASCRIPT

console.log("1 - Start");
console.log("2 - Middle");
console.log("3 - End");

// EXERCISE 2: ASYNCHRONOUS JAVASCRIPT

console.log("1 - Start");

setTimeout(() => {
    console.log("2 - This is delayed");
}, 2000);

console.log("3 - End");


 // TASK 11.1 - EXERCISE 2: CALLBACK PATTERN

function loadUser(userId, callback) {

    // Simulate a database lookup taking 1.5 seconds
    setTimeout(() => {

        // Create a user object
        const user = {
            id: userId,
            name: "Wilfred Mutuma",
            course: "IYF Web Development",
            week: 6
        };

        // Call the callback with the user information
        callback(user);

    }, 1500);
}

// Call the loadUser function
loadUser(1, function(user) {

    console.log("User data received:");
    console.log(user);

});
