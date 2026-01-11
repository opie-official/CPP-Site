import "./styles/start_page.css"
import API from "@/lib/db";
import ExampleEl from "@/components/ui/ExampleEl";
import React from "react";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";
import {GetExamples} from "@/app/examples/actions";







export default async function StartPage(){

    const examples: IExample[] = await GetExamples() as IExample[];

    return (
        <div id={"examples-start-page"}>
            <NavBar type={"Examples"}/>
            <p id={"examples-start-p"}>C++ Code Examples</p>
            <div className={"examples-start-div"}>There you can see many c++ code examples</div>
            <div id={"examples-start-examples"}>
                {examples.map((el,key)=><ExampleEl {...el} key={key}  />)}
            </div>
            <Footer margin={10} is={false}/>
        </div>
    )
}