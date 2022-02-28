import Layout from "../../components/layout";
import { getAllUserIds, getUserWithId } from "../../lib/posts";

export async function getStaticPaths() {
    const paths = await getAllUserIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const userData = await getUserWithId(params.id);
    return {
        props: {
            userData,
        },
    };
}

export default function User({ userData }) {
    return (
        <Layout>
            <div>
                <h1>{userData.name}</h1>
            </div>
        </Layout>
    );
}
