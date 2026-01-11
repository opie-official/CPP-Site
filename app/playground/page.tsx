import "./styles.css"
import NavBar from "@/components/ui/NavBar";
import Page from "@/components/pages/playground/Page"





export default function Playground(){


    return (
        <div id={"playground-page"}>
            <NavBar type={"Playground"}/>
            <div id={"playground-in"}>
                <Page/>
            </div>
        </div>
    )
}