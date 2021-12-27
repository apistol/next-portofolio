import Layout from "../components/Layout";
import {Component} from "react";
import fetch from "isomorphic-unfetch"
import Error from "./_error"

class About extends Component{

    static async getInitialProps(){
        const res=await fetch('https://api.github.com/users/reedbarge1r')
        const statusCode = res.status > 200 ? res.status : false
        const data=await res.json();
        return ({
            user: data,
            statusCode
        })
    }

    render(){

        const {user, statusCode}=this.props;

        if (statusCode) return <Error statusCode={statusCode}/>

        return (
            <Layout title={"About Page"}>
                {user.name}
                <img src={user.avatar_url} alt="image" height={100}/>
            </Layout>
        )
    }
};

export default About;