import Link from "next/link";
import styles from "../styles/layout.module.scss";

export default function Layout({ children }) {
    return (
        <>
            <header className={styles.navbar}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/posts">
                    <a>Posts</a>
                </Link>
            </header>
            <main className={styles.main}>{children}</main>
        </>
    );
}
