"use client"

import "./styles/page.css"
import {useLayoutEffect, useRef, useState} from "react";


interface Props {
    text: string
}

const kw = [
    "auto",
    "int",
    "double",
    "short",
    "long",
    "for",
    "if",
    "else",
    "while",
    "return",
    "co_yield",
    "co_return",
    "co_await",
    "char",
    "char32_t",
    "char8_t",
    "char16_t",
    "wchar_t",
    "nullptr",
    "noexcept",
    "false",
    "true",
    "struct",
    "enum",
    "class",
    "final",
    "public",
    "private",
    "protected",
    "this",
    "try",
    "catch",
    "finally",
    "throw",
    "import",
    "export",
    "t_thread",
    "",
    "",
]
type RuleName = "preproc" | "lib" | "string" | "numb" | "oper" | "id"|"spec";

type Rule = {
    name: RuleName;
    reg: RegExp;
    color: string;
    priority: number;
};

const rules: Rule[] = [
    {name: "preproc", reg: /#\s*\w+/gm, color: "#B3AE60", priority: 0},
    {name: "string", reg: /"([^"\\]|\\.)*"?|'([^'\\]|\\.)*'?/gm, color: "#6AAB73", priority: 1},
    {name: "lib", reg: /<[^ ]*?>/gm, color: "#6AAB73", priority: 2},
    {name: "numb", reg: /\b\d+(\.\d+)?\b/gm, color: "#2AACB8", priority: 3},
    {name: "oper", reg: /[+\-*/%^~&|<>.,:;!()\[\]{}=]/gm, color: "#BCBEC4", priority: 4},
    {name: "id", reg: /\b[A-Za-z_]\w*\b/gm, color: "#BCBEC4", priority: 5},
    {name: "spec", reg: /[\n\s\r\t]/gm, color: "#BCBEC4", priority: 5},
];
type Token = {
    start: number;
    end: number;
    val: string;
    rule: RuleName;
    priority: number;
};




function lex(text: string): Token[] {
    const candidates: Token[] = [];

    for (const r of rules) {
        for (const m of text.matchAll(r.reg)) {
            const start = m.index ?? 0;
            const val = m[0];
            candidates.push({
                start,
                end: start + val.length,
                val,
                rule: r.name,
                priority: r.priority,
            });
        }
    }

    candidates.sort((a, b) => {
        if (a.start !== b.start) return a.start - b.start;
        if (a.priority !== b.priority) return a.priority - b.priority;
        return (b.end - b.start) - (a.end - a.start);
    });

    const picked: Token[] = [];
    for (const t of candidates) {
        const last = picked[picked.length - 1];
        if (!last || t.start >= last.end) {
            picked.push(t);
            continue;
        }

        if (t.start === last.start && t.priority < last.priority) {
            picked[picked.length - 1] = t;
        }
    }

    return picked;
}

type Segment =
    | { kind: "plain"; text: string }
    | { kind: "tok"; text: string; color: string; rule: RuleName };

function toSegments(text: string, tokens: Token[]): Segment[] {
    const segs: Segment[] = [];
    let pos = 0;

    for (const t of tokens) {
        if (t.start > pos) {
            segs.push({kind: "plain", text: text.slice(pos, t.start)});
        }
        const color = rules.find(r => r.name === t.rule)!.color;
        segs.push({kind: "tok", text: t.val, color, rule: t.rule});
        pos = t.end;
    }

    if (pos < text.length) {
        segs.push({kind: "plain", text: text.slice(pos)});
    }

    return segs;
}

const kwSet = new Set(kw);
const KW_COLOR = "#CF8E6D";


const show = (t: string) => t.replace(/ /g, "\u00A0");

function renderSegments(segs: Segment[]) {
    return segs.map((s, idx) => {
        if (s.kind === "plain") return <span key={idx}>{show(s.text)}</span>;

        let color = s.color;
        if (s.rule === "id" && kwSet.has(s.text)) color = KW_COLOR;

        return (
            <span key={idx} className="code-seg" style={{ color }}>
        {show(s.text)}
      </span>
        );
    });
}
function CodeLight({text}: Props) {
    const tokens = lex(text);
    const segs = toSegments(text, tokens);

    return (
        <div className={"code-layer"}>
        <>{renderSegments(segs)}</>
     </div>
    );
}


export default function Page() {

    const [text, setText] = useState("")
    const [am, setAm]=useState(1)

    const sizerRef = useRef<HTMLDivElement | null>(null);
    const rawRef = useRef<HTMLTextAreaElement | null>(null);
    const lightRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const sizer = sizerRef.current;
        const raw = rawRef.current;
        const light = lightRef.current;
        if (!sizer || !raw || !light) return;

        const apply = () => {
            const h = sizer.scrollHeight;
            raw.style.height = `${h}px`;
            light.style.height = `${h}px`;
        };

        apply();

        const ro = new ResizeObserver(apply);
        ro.observe(sizer);

        return () => ro.disconnect();
    }, [text]);

    useLayoutEffect(() => {

        const amount = text.split("\n").length;
        setAm(amount);

    }, [text]);


    function genRows(){
        const rows: number[] = [];
        for (let i=1;i<=am;i++){
            rows.push(i);
        }

        return rows.map((el,key)=>{
            return <p key={key}>{el}</p>
        })
    }

    return (
        <div id={"playground-code"}>
            <div id={"playground-in"}>
                <div id={"playground-flex"}>
                    <div id={"playground-rows"}>{genRows()}</div>
                    <div id={"playground-text"}>
                        <div id="playground-sizer">{text + "\n"}</div>
                        <div id={"playground-light"}>
                            <CodeLight text={text+"\n"}/>
                        </div>
                        <textarea
                            id={"playground-raw"}
                            value={text}
                            onInput={(e) => setText(e.currentTarget.value)}
                            spellCheck={false}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}