import Layout from "../../components/layout";
import Head from "next/head";
import { getAllUsers } from "../../lib/posts";
import Link from "next/link";
import styles from "./users.module.scss";

export async function getStaticProps() {
    const users = await getAllUsers();

    return {
        props: {
            users,
        },
    };
}

export default function Users({ users }) {
    return (
        <Layout>
            <Head>
                <title>Users</title>
                <meta name="users" content="all users who write articles" />
            </Head>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className={styles.listItem}>
                        <Link href={`/users/${user.id}`} key={user.id}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
