'use client'

import "./styles/button2.css"
import React from "react";
import Link from "next/link";


interface Props {
    text: string;
    path: string;
    id?: string
    classname?: string;
    isDark?:boolean;
    image?:string;
}


export default function Button2(props: Props) {
    return (
        <Link id={props.id} className={
            [(!props.isDark ? "button2" : "button2-d"), props.classname].join(" ")
        }
              href={props.path}>
            <button>
                {props.text}
                {props.image && <div className={"button2-image-in"}><img src={props.image}/></div>}
            </button>
        </Link>

    )
}