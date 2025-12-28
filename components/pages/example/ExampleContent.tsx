'use client'
import "./styles/example-content.css"

import Link from "next/link";
import Page from "@/components/pages/example/Page";
import React from "react";

interface Props{
    id: string;
    data: IExample;
}


export default function ExampleContent(props: Props){

    // const [articles, setArticles] = React.useState<IArticle[]>([]);

    const {data, id}=props;
    return (
        <div id={"example-content"}>
            <aside id={"example-aside"}>
                {/*{articles.map((el, key) => {*/}
                {/*    return <Link key={key} href={`/examples/example?example=${id}#${el.anchor}`}*/}
                {/*    style={{*/}
                {/*        height:"10vh",*/}
                {/*        marginTop: "20vh",*/}
                {/*        textDecoration:"none",*/}
                {/*        color:"white"*/}
                {/*    }}*/}
                {/*    >*/}
                {/*        <p>{el.name}</p>*/}
                {/*    </Link>*/}
                {/*})}*/}
            </aside>
            <Page /*setArticles={setArticles}*/ text={data.text_}/>
        </div>

    )


}