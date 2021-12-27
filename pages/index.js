import Layout from "../components/Layout";
import { useRouter } from "next/router"

const Index=() => {

    const router = useRouter()

    return (
        <Layout title={"Home Page"}>

        </Layout>
    );
};

export default Index;