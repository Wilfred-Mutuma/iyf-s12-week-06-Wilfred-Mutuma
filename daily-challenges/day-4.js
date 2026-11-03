
// WEEK 6 - DAILY CHALLENGE 4
// Fetch API and JSON

async function getUsers() {
    try {
        console.log("Fetching users...");

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        console.log("Users received:");

        users.forEach(user => {
            console.log(user.name, "-", user.email);
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUsers();
