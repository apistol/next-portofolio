import Layout from "../components/Layout";
import Link from "next/link"
import {useRouter} from "next/router";


const Post = () => {

    const router = useRouter()

    return (
        <Layout title={router.query.title}>
          <p> Lorem ipsum </p>
        </Layout>
    );
};

export default Post

