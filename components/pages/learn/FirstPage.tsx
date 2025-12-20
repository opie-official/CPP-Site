'use client'
import "./styles/first_page.css"
import Spot from "@/components/ui/Spot";
import {useEffect} from "react";


interface StartProps{
    chapters: number;
    has:boolean
    chapter: number;
}


interface Props{
    chapters: number;
}








function StartMenu(props: StartProps){
    return (
        <div id={"learn-start-menu"}>
            <p id={"learn-start-title"}>Start learning C++</p>
            <p id={"learn-start-subtitle"}>{props.chapters} chapters</p>
            <div id={"learn-start-continue"}>
                {
                    props.has?
                        <button id={"learn-start-has"}>Go to {props.chapter} chapter</button>
                        :
                        "There`s no progress"
                }
            </div>
        </div>
    )
}


interface InfoProps{
    text: string;
}

function Info(props: InfoProps){
    return (
        <div className={"learn-first-info"}>
            <div className={"learn-first-info-circle"}></div>
            <p className={"learn-first-info-p"}>{props.text}</p>
        </div>
    )
}


const texts=[
    "Your progress will be saved.",
    "At the end of the chapters there will be tests."
]



export default function FirstPage(props: Props){
    let has: string | null=null;
    let json: any;


    useEffect(()=>{
        has = localStorage.getItem("cpp-learn-progress")
        if (has!==null){
            json = JSON.parse(has);
        }
    }, [])

    return (
        <div id={"learn-first-page"}>
            <div id={"learn-start"}>
                <Spot x={0} y={25} width={100} height={130} />
                <StartMenu chapter={has!==null?json.chapter:0} has={has!==null}  chapters={props.chapters}/>
            </div>
            <div id={"learn-first-info"}>
                {texts.map((el,key)=><Info text={el} key={key}/>)}
            </div>
        </div>
    )
}