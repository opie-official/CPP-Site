'use client'
import "./styles/lesson.css"

import Link from "next/link";
import React from "react";

interface LessonProps{
    num: number;
    lesson: ILesson
}


export default function Lesson(props: LessonProps){
    return (
        <Link href={`/learn/lesson?lesson=${props.lesson.id}`} className={"lesson-page"}>
            <div className={"lesson-page-in"}>
                <div className={"lesson-top"}>
                    <div className={"lesson-top-num"}>{props.num}</div>
                    <p className={"lesson-top-title"}>{props.lesson.title}</p>
                </div>
                <div className={"lesson-desc"}>{props.lesson.description}</div>
            </div>
        </Link>

    )
}
