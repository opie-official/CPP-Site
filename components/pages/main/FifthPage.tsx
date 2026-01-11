import "./styles/fifth_page.css"
import React from "react";
import Title from "@/components/ui/Title";
import Spot from "@/components/ui/Spot";



type Image={
    path: string;
    title: string;

}

const obj:Image[]=[
    {
        path: "/unity.svg",
        title: "Unity"
    }, {
        path: "/ue.svg",
        title: "Unreal Engine"
    }, {
        path: "/ai.svg",
        title: "Adobe Illustrator"
    }, {
        path: "/ps.svg",
        title: "Adobe Photoshop"
    }, {
        path: "/ae.svg",
        title: "Adobe AE"
    }, {
        path: "/blender.svg",
        title: "Blender"
    },/* {
        path: "/steam.svg",
        title: "Steam"
    },*/ {
        path: "/office.svg",
        title: "Microsoft Office"
    }, {
        path: "/firefox.svg",
        title: "Mozilla Firefox"
    }, {
        path: "/vs.svg",
        title: "Microsoft Visual Studio"
    },/* {
        path: "/opera.svg",
        title: "Opera"
    },*/ {
        path: "/google.svg",
        title: "Google Chrome"
    }, {
        path: "/windows.svg",
        title: "Microsoft Windows"
    },{
        path: "/clion.svg",
        title: "Jetbrains CLion"
    },
]



export default function FifthPage(){


    return (
        <div id={"main-fifth-page"}>
            <Spot x={50} y={50} width={100} height={100}/>
            <Title id={"main-fifth-title"} text={"Projects on C++"}/>
            <div id={"main-fifth-content"}>
                {/*<p id={"main-fifth-desc"}>C++ is used where maximum performance and control over hardware are important: in game engines, system software, browsers, financial platforms, and embedded devices. It underlies modern games with realistic graphics, operating systems, high‑frequency trading, search engines, and programs for working with 3D graphics and multimedia.</p>*/}
                <div id={"main-fifth-logos"}>
                    {obj.map((el,key)=>{
                        return <div className={"main-fifth-logo"} key={key}>
                            <div className={"main-fifth-logo-img"}>
                                <img src={el.path}/>
                            </div>
                            <p className={"main-fifth-logo-p"}>{el.title}</p>
                            <div className={"main-fifth-logo-bg"}></div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}