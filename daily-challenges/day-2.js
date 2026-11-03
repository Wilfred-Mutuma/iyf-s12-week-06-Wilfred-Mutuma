
// WEEK 6 - DAILY CHALLENGE 2
// Working with Promises

function getStudent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const student = {
                name: "Wilfred Mutuma",
                course: "Web Development",
                week: 6
            };

            resolve(student);
        }, 1500);
    });
}

// Call the Promise
getStudent()
    .then(student => {
        console.log("Student information received:");
        console.log(student);
    })
    .catch(error => {
        console.log("Error:", error);
    });

console.log("Waiting for student information...");
