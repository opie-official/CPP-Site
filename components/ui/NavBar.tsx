/**
 *
 */

'use client'
import "./styles/nav_bar.css"
import Link from "next/link";


/**
 *
 */
interface BtnProps{
    text: string;
    path: string;
    active: boolean;
}

/**
 *
 * @param props
 * @constructor
 */
function NavButton(props: BtnProps){
    return (
        <Link href={props.path} className={"nav-button"}>
            <button className={props.active? "nav-button-active":""}>
                {props.text}
            </button>
        </Link>

    )

}

/**
 *
 * @constructor
 */
function NavGeneral() {
    return (
        <Link href={"/"} id={"nav-general"}>
            <button>
                <img src={"/logo.svg"}/>
                <p id={"nav-general-p"}>C++26</p>
            </button>
        </Link>
    )
}

interface Props{
    type: string;
}



/**
 *
 * @constructor
 */
export default function NavBar(props: Props) {


    const buttons =[
        {
            text: "Examples",
            path: "/examples"
        },{
            text: "Playground",
            path: "/playground"
        },
        {
            text: "Standard",
            path: "https://isocpp.org/std/the-standard"
        },
        {
            text: "Learn",
            path: "/learn"
        },
        {
            text: "Install",
            path: "/install"
        },

    ]

    return (
        <div id={"nav-bar"}>
            <NavGeneral/>
            <div id={"nav-buttons"}>
                {buttons.map((el,i)=> <NavButton active={el.text==props.type} {...el} key={i}/>)}
            </div>
        </div>
    )
}