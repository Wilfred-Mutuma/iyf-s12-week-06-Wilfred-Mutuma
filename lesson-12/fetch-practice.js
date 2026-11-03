
// WEEK 6 - LESSON 12
// TASK 12.1 - FETCH API

const loadUserBtn = document.getElementById("loadUserBtn");
const status = document.getElementById("status");
const userData = document.getElementById("userData");

loadUserBtn.addEventListener("click", async function() {

    status.textContent = "Loading user information...";
    userData.innerHTML = "";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error("Failed to fetch user information");
        }

        const user = await response.json();

        status.textContent = "User information loaded successfully!";

        userData.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
        `;

    } catch (error) {
        status.textContent = "Error loading user information.";
        console.error("Fetch Error:", error);
    }

});
// TASK 12.2 - FETCH MULTIPLE USERS

const loadUsersBtn = document.getElementById("loadUsersBtn");

loadUsersBtn.addEventListener("click", async function() {

    status.textContent = "Loading all users...";
    loadUsersBtn.disabled = true;
    userData.innerHTML = "";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();
        allUsers = users;

        status.textContent = "All users loaded successfully!";

        users.forEach(user => {
            userData.innerHTML += `
                <div>
                    <h2>${user.name}</h2>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>City:</strong> ${user.address.city}</p>
                    <hr>
                </div>
            `;
        });

    } catch (error) {
    status.textContent = "Error loading users. Please try again.";
    console.error("Fetch Error:", error);
} finally {
    loadUsersBtn.disabled = false;
}

});
// TASK 12.3 - SEARCH AND FILTER USERS

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

let allUsers = [];

searchBtn.addEventListener("click", async function() {

    const searchTerm = searchInput.value.toLowerCase().trim();

    if (allUsers.length === 0) {
        status.textContent = "Please load all users first.";
        return;
    }

    const filteredUsers = allUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm)
    );

    userData.innerHTML = "";

    if (filteredUsers.length === 0) {
        status.textContent = "No users found.";
        return;
    }

    status.textContent = `${filteredUsers.length} user(s) found.`;

    filteredUsers.forEach(user => {
        userData.innerHTML += `
            <div>
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
                <hr>
            </div>
        `;
    });

});
// TASK 12.5 - POST REQUEST

const createUserBtn = document.getElementById("createUserBtn");
const newName = document.getElementById("newName");
const newEmail = document.getElementById("newEmail");
const postStatus = document.getElementById("postStatus");

createUserBtn.addEventListener("click", async function() {

    const name = newName.value.trim();
    const email = newEmail.value.trim();

    if (name === "" || email === "") {
        postStatus.textContent = "Please enter both name and email.";
        return;
    }

    try {
        postStatus.textContent = "Creating user...";

        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        });

        if (!response.ok) {
            throw new Error("Failed to create user");
        }

        const createdUser = await response.json();

        postStatus.textContent =
            `User created successfully! ID: ${createdUser.id}`;

        console.log("Created User:", createdUser);

    } catch (error) {
        postStatus.textContent = "Error creating user.";
        console.error("POST Error:", error);
    }

});