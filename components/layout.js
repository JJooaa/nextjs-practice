import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/layout.module.scss";

export default function Layout({ children }) {
    const { data: session } = useSession();

    return (
        <>
            <header className={styles.navbar}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                {!session ? (
                    <button onClick={() => signIn("github")}>Login</button>
                ) : (
                    <>
                        <div>
                            <Link href="/posts">
                                <a>Posts</a>
                            </Link>
                            <Link href="/users">
                                <a>Users</a>
                            </Link>
                            <Link href="/secret">
                                <a>Secret</a>
                            </Link>
                        </div>
                        <div className={styles.profile}>
                            <Image
                                src={session.user.image}
                                alt={session.user.name}
                                width="50px"
                                height="50px"
                            />
                            <button onClick={() => signOut()}>Log Out</button>
                        </div>
                    </>
                )}
            </header>
            <main className={styles.main}>{children}</main>
        </>
    );
}
