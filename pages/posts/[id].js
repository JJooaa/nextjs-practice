import { getAllPostIds, getPostWithId } from "../../lib/posts";
import Layout from "../../components/layout";

export async function getStaticPaths() {
    const paths = await getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const response = await getPostWithId(params.id);
    return {
        props: {
            response,
        },
    };
}

export default function Post({ response }) {
    return <Layout>{response.title}</Layout>;
}
