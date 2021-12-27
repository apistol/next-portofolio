import Layout from "../components/Layout";

export default ({statusCode}) => (
    <Layout title={"Error"}>
        {statusCode ? statusCode : <p>Could not find the page</p>}

    </Layout>
)