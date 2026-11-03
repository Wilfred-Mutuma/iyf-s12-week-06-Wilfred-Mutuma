
// WEEK 6 - LESSON 11
// TASK 11.2 - CALLBACK HELL & PROMISES

// EXERCISE 1: EXPERIENCE CALLBACK HELL

// Function 1: Get user information
function getUserData(userId, callback) {
    setTimeout(() => {
        callback({
            id: userId,
            name: "John"
        });
    }, 1000);
}

// Function 2: Get user's posts
function getUserPosts(userId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, title: "Post 1" },
            { id: 2, title: "Post 2" }
        ]);
    }, 1000);
}

// Function 3: Get comments for a post
function getPostComments(postId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, text: "Great post!" },
            { id: 2, text: "Thanks for sharing" }
        ]);
    }, 1000);
}

// CALLBACK HELL - PYRAMID OF DOOM

getUserData(1, function(user) {

    console.log("User:", user);

    getUserPosts(user.id, function(posts) {

        console.log("Posts:", posts);

        getPostComments(posts[0].id, function(comments) {

            console.log("Comments:", comments);

        });

    });

});

// EXERCISE 2: PROMISES TO THE RESCUE

// Convert getUserData into a Promise
function getUserDataPromise(userId) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (userId > 0) {
                resolve({
                    id: userId,
                    name: "John"
                });
            } else {
                reject("Invalid user ID");
            }

        }, 1000);

    });
}

// Convert getUserPosts into a Promise
function getUserPostsPromise(userId) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (userId > 0) {
                resolve([
                    { id: 1, title: "Post 1" },
                    { id: 2, title: "Post 2" }
                ]);
            } else {
                reject("Invalid user ID");
            }

        }, 1000);

    });
}

// Convert getPostComments into a Promise
function getPostCommentsPromise(postId) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (postId > 0) {
                resolve([
                    { id: 1, text: "Great post!" },
                    { id: 2, text: "Thanks for sharing" }
                ]);
            } else {
                reject("Invalid post ID");
            }

        }, 1000);

    });
}

// Test the Promise
getUserDataPromise(1)
    .then(user => {
        console.log("Promise User:", user);
    })
    .catch(error => {
        console.error("Error:", error);
    });
// EXERCISE 3: TEST PROMISE REJECTION

getUserDataPromise(0)
    .then(user => {
        console.log("User:", user);
    })
    .catch(error => {
        console.error("Promise rejected:", error);
    });
    // TASK 11.3 - PROMISE CHAINING

getUserDataPromise(1)
    .then(user => {
        console.log("Chained User:", user);
        return getUserPostsPromise(user.id);
    })
    .then(posts => {
        console.log("Chained Posts:", posts);
        return getPostCommentsPromise(posts[0].id);
    })
    .then(comments => {
        console.log("Chained Comments:", comments);
    })
    .catch(error => {
        console.error("Chaining Error:", error);
    });
    // EXERCISE: PROMISE.ALL

Promise.all([
    getUserDataPromise(1),
    getUserPostsPromise(1),
    getPostCommentsPromise(1)
])
.then(results => {
    console.log("Promise.all results:");
    console.log("User:", results[0]);
    console.log("Posts:", results[1]);
    console.log("Comments:", results[2]);
})
.catch(error => {
    console.error("Promise.all Error:", error);
});
// EXERCISE: PROMISE.RACE

const fastPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve("Fast Promise finished first!");
    }, 1000);
});

const slowPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve("Slow Promise finished!");
    }, 3000);
});

Promise.race([fastPromise, slowPromise])
    .then(result => {
        console.log("Promise.race result:", result);
    })
    .catch(error => {
        console.error("Promise.race Error:", error);
    });
    // TASK 11.4 - ASYNC/AWAIT

async function displayUserData() {
    try {
        const user = await getUserDataPromise(1);

        console.log("Async/Await User:", user);

        const posts = await getUserPostsPromise(user.id);

        console.log("Async/Await Posts:", posts);

        const comments = await getPostCommentsPromise(posts[0].id);

        console.log("Async/Await Comments:", comments);

    } catch (error) {
        console.error("Async/Await Error:", error);
    }
}

displayUserData();
// EXERCISE: PARALLEL EXECUTION WITH ASYNC/AWAIT

async function loadAllData() {
    try {
        const [user, posts, comments] = await Promise.all([
            getUserDataPromise(1),
            getUserPostsPromise(1),
            getPostCommentsPromise(1)
        ]);

        console.log("Parallel User:", user);
        console.log("Parallel Posts:", posts);
        console.log("Parallel Comments:", comments);

    } catch (error) {
        console.error("Parallel Loading Error:", error);
    }
}

loadAllData();