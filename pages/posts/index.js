import Head from "next/head";
import React from "react";
import Layout from "../../components/layout";
import axios from "axios";
import styles from "./posts.module.scss";
import Link from "next/link";
import { getAllPosts, getAllUsers } from "../../lib/posts";

export async function getStaticProps() {
    const posts = await getAllPosts();
    const users = await getAllUsers();
    return {
        props: {
            posts,
            users,
        },
    };
}

export default function Posts({ posts, users }) {
    console.log(posts);
    return (
        <Layout>
            <Head>
                <title>Posts Page</title>
                <meta name="posts" content="all the posts" />
            </Head>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => {
                    let { name } = users.find(
                        (user) => user.id === post.userId
                    );

                    return (
                        <li className={styles.postListItem} key={post.id}>
                            <Link href={`/posts/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                            <p>Written by: {name}</p>
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
}
