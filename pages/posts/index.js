import Head from "next/head";
import React from "react";
import Layout from "../../components/layout";
import styles from "./posts.module.scss";
import Link from "next/link";
import { getAllPosts, getAllUsers } from "../../lib/posts";
import { getSession, useSession } from "next-auth/react";

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
    const { data: session } = useSession();

    if (!session) {
        return (
            <>
                <Layout>
                    <div>Cannot see this page without loggin in!</div>
                </Layout>
            </>
        );
    }

    return (
        <Layout>
            <Head>
                <title>Posts</title>
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
                            <Link href={`/posts/${post.id}`} key={post.id}>
                                <a>{post.title}</a>
                            </Link>
                            <p>
                                Written by:{" "}
                                <Link href={`/users/${post.userId}`}>
                                    <a>{name}</a>
                                </Link>
                            </p>
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
}
