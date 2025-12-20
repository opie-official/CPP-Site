import {GetChapters, GetLessons} from "@/app/learn/actions"
import FirstPage from "@/components/pages/learn/FirstPage";
import React from "react";
import SecondPage from "@/components/pages/learn/SecondPage";
import "./styles/learn_page.css"
import Chapters from "@/components/pages/learn/Chapters";
import Footer from "@/components/ui/Footer";

export default async function LearnPage() {

    const chapters: IChapter[] = await GetChapters() as IChapter[];
    console.log(chapters);
    const lessons: ILesson[] = await GetLessons() as ILesson[];

    console.log(lessons)
    return (
        <div id={"learn-page"}>
            <div id={"learn-inner"}>
                <FirstPage chapters={chapters.length}/>
                <SecondPage/>
                <Chapters chapters={chapters} lessons={lessons}/>
            </div>
           <Footer/>
        </div>
    )
}