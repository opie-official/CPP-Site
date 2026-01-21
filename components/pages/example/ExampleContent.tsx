'use client'
import "./styles/example-content.css"

import Page from "@/components/pages/example/Page";
import React, {useEffect, useState} from "react";

interface Props {
    id: string;
    data: IExample;
    rows: IExample[]
}

function Aside(props: { id: string }) {

    const [articles, setArticles] = React.useState<ScrollElemProps[]>([]);

    useEffect(() => {
        const list: ScrollElemProps[] = []
        const root = document.getElementById("example-main") as HTMLDivElement;
        const h = [...root.querySelectorAll("h1")];
        for (let i of h) {
            list.push({
                title: i.textContent,
                handle() {
                    console.log("scrolled", i.offsetTop)
                    root.scrollTo({
                        top: i.offsetTop,
                        left: 0,
                        behavior: "smooth"
                    })
                },
            })
        }
        setArticles(list)

    }, [props.id]);

    return (
        <aside id={"example-aside"}>
            <div id={"example-aside-p"}>Examples</div>
            <div id={"example-aside-scroll"}>
                <Scroll in={articles}/>
            </div>
        </aside>
    )
}

interface Aside2Props {
    id: string;
    rows: IExample[];
    data: IExample;
}


interface ScrollElemProps {
    title: string;
    classname?: string;
    id?: string;
    handle?: () => void;
    active?: boolean;
}

interface ScrollProps {
    in: ScrollElemProps[]
}

function Scroll(props: ScrollProps) {
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


function Aside2(props: Aside2Props) {
    useEffect(() => {
        const list: ScrollElemProps[] = props.rows.map((el) => {
            return {
                title: el.title,
                handle() {
                    window.location.href = `/learn/lessons?lesson=${el.id}`
                },
                active: props.data.id==+props.id
            }
        })
        setLeft(list);

    }, [props.id]);
    const [left, setLeft] = useState<ScrollElemProps[]>([])
    const cur = props.data;

    return (<div id={"example-left-aside"}>
        <div id={"example-left-info"}>
            <p id={"example-left-current"}>{cur?.title}</p>
        </div>
        <div id={"example-left-p"}>Chapters</div>
        <div id={"example-left-scroll"}>
            <Scroll in={left}/>
        </div>
    </div>)
}

export default function ExampleContent(props: Props) {


    const {data, id, rows} = props;

    return (
        <div id={"example-content"}>
            <Aside2 id={id} rows={rows} data={data}/>
            <Page rows={rows} id={id} text={data.text_}/>
            <Aside id={id}/>

        </div>

    )


}