import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";
import Layout from "../../components/layout";

const Secret = () => {
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/");
        },
    });

    if (!session) {
        return null;
    }

    return (
        <>
            <Layout>Secret</Layout>
        </>
    );
};

export default Secret;
