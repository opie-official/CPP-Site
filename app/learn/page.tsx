import "./styles.css"
import NavBar from "@/components/ui/NavBar";
import LearnPage from "@/components/pages/learn/LearnPage";
import {Metadata} from "next";




export const metadata: Metadata={
    title: "Learn C++"
}

export default function Home(){



    return (
        <div id={"learn"}>
            <NavBar/>
            <LearnPage/>
        </div>
    )
}