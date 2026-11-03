
// WEEK 6 - DAILY CHALLENGE 5
// Promise.all() and parallel execution

function getStudentName() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Wilfred Mutuma");
        }, 1000);
    });
}

function getStudentCourse() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Web Development");
        }, 1500);
    });
}

function getStudentGrade() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Grade A");
        }, 2000);
    });
}

async function getStudentDetails() {
    try {
        console.log("Loading student details...");

        const [name, course, grade] = await Promise.all([
            getStudentName(),
            getStudentCourse(),
            getStudentGrade()
        ]);

        console.log("Student Details");
        console.log("Name:", name);
        console.log("Course:", course);
        console.log("Grade:", grade);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getStudentDetails();
