'use client'

import "./styles/chapter_page.css"
import React from "react";
import Lesson from "@/components/ui/Lesson";



interface Props{
    num: number;
    title: string;
    lessons: ILesson[];

}



export default function ChapterPage(props: Props) {
    return (
        <div className={"chapter-page"}>
            <div className={"chapter-name"}>{props.num} Chapter: {props.title}</div>
            <div className={"chapter-lessons"}>
                {props.lessons.length>0?props.lessons.map((el, key)=><Lesson num={key} lesson={el} key={key}/>)
                :
                    <p style={{
                        color: "var(--subtitle)",
                        fontSize:"20pt"
                    }}>Nothing to Show</p>
                }
            </div>
        </div>
    )
}