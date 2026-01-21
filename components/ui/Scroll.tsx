"use client"
import "./styles/scroll.css"

import React from "react";



interface ScrollProps {
    in: ScrollElemProps[]
}

export default function Scroll(props: ScrollProps) {
    return (
        <div className={"scroll-component"}>
            <div className={"scroll-component-in"}>
                {props.in.map((el, key) =>
                    <button
                        className={el.active ? [el.classname, "example-active"].join(" ") : [el.classname].join(" ")}
                        key={key} id={el.id} onClick={el.handle}>{el.title}</button>
                )}
            </div>
        </div>
    )
}
