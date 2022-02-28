import axios from "axios";

export async function getAllPosts() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
}

export async function getAllUsers() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
}

export async function getPostWithId(id) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
}

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
