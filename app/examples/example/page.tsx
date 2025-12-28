import "./styles.css"
import List from "@/components/ui/List";
import NavBar from "@/components/ui/NavBar";
import Option from "@/components/ui/Option";
import React from "react";
import Page from "@/components/pages/example/Page";
import API from "@/lib/db";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import ExampleContent from "@/components/pages/example/ExampleContent";




interface Props{
    searchParams:{
        example: string;
    }
}


export default async function Example(props: Props){

    const {example} = await props.searchParams;

    const data = await API.__getExampleById(+example) as IExample;


    return (
        <div id={"example-page"}>
            <NavBar/>
           <ExampleContent id={example} data={data}/>
        </div>
    )
}