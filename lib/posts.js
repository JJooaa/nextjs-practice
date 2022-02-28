import axios from "axios";

// function that returns all the posts from the database
export async function getAllPosts() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
}

// function that we can use to pre determine the urls /posts/id
export async function getAllPostIds() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );

    return response.data.map((data) => {
        return {
            params: {
                id: data.id.toString(),
            },
        };
    });
}

// Get the data for the current url parameter
export async function getPostWithId(id) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
}

// function that returns all the users from the database
export async function getAllUsers() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
}

export async function getAllUserIds() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    return response.data.map((user) => {
        return {
            params: {
                id: user.id.toString(),
            },
        };
    });
}

export async function getUserWithId(id) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
}
