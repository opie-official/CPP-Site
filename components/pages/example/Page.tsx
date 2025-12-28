'use client'
import "./styles/page.css"
import Option from "@/components/ui/Option";
import List from "@/components/ui/List";
import React, {useEffect, useRef} from "react";
import Code from "@/components/ui/Code";
import Alert from "@/components/ui/Alert";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/prism";
import Footer from "@/components/ui/Footer";


interface Props {
    text: string;
    // setArticles: React.Dispatch<React.SetStateAction<IArticle[]>>;
}


export default function Page(props: Props) {

    const [visible, setVisible] = React.useState(false);
    let id_counter = 0;
    // const ref=useRef<HTMLDivElement>(null);
    // const {setArticles} = props;
    //
    // const id_s: IArticle[] = []
    //
    // useEffect(() => {
    //     setArticles(id_s);
    //
    // }, [])


    return (
        <div id={"example-main"}>
            <div id={"example-in"}>
                <ReactMarkdown
                    remarkPlugins={[remarkBreaks, remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeSanitize]}

                    components={{
                        //@ts-ignore
                        code: ({node, inline, className, children, ...props}) => {
                            //const match = /language-(\w+)/.exec(className || '')
                            return (
                                <Code visible={visible} setVisible={setVisible}
                                      text={children ? children.toString() : ""}/>
                            )
                        },
                        h1: ({children}) => {
                            const id = id_counter + 1;
                            id_counter += 1;
                            // id_s.push({
                            //     name: children?.toString() ?? "",
                            //     anchor: `h-${id}`
                            // })
                            return <h1
                                style={{
                                    fontFamily: "Roboto medium, serif",
                                    color: "white",
                                    margin: "2% 0",
                                }}
                                className={"h"}
                                // id={`h-${id}`}
                            >{children}</h1>
                        }
                    }}

                >
                    {props.text}
                </ReactMarkdown>
            </div>
            <Alert text={"Code was copied"} setVisible={setVisible} visible={visible}/>
            {/*<Footer is={false}/>*/}

        </div>
    )
}