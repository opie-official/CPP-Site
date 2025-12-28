import "./styles/examples_el.css"
import Link from "next/link";


interface Props{
    title: string;
    id: number;
    desc: string;
}


export default function ExampleEl(props: Props){
    return (
        <Link href={`/examples/example?example=${props.id}`} className={"example-el"}>
            <div className={"example-el-in"}>
                <p className={"example-el-h"}>{props.title}</p>
                <p className={"example-el-desc"}>{props.desc}</p>
            </div>
        </Link>
    )
}