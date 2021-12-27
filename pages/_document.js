import Document, {Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document{
    render(){
        return (
            <Html>
                <Head>
                    {/*<link rel={"stylesheet"}*/}
                    {/*      href={"https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js"}/>*/}
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                          rel="stylesheet"/>
                    <meta name={"description"} content={"A site for my programming portofolio"}/>
                    <meta charSet={"utf-8"}/>
                    <meta name={"robots"} content={"noindex, nofollow"}/>
                    <meta name={"viewport"} content={"width=device-width"}/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>

            </Html>
        )
    }
}
