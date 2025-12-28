import "./styles/sections.css"
import React from "react";


interface Props{
    children?: React.ReactNode;
    name: string;
    id?:string;
    height?:number;
}

export default function Option(props: Props){
    return (
        <div id={props.id} className={"install-section-option"}
        style={{
            height: props.height && `${props.height}% !important`
        }}
        >
            <p className={"install-section-pos-sub"}>{props.name}</p>
            {props.children}
        </div>
    )
}