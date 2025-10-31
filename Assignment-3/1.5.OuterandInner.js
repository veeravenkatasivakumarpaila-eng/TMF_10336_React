import React from "react";
import { createRoot } from "react-dom/client";

const TitleComponent =({color,text1,text2,text3}) => (
    <div className="title" style={{color}}>
        <h1>Heading1</h1>
        <h2>Heading2</h2>
        <h3>Heading3</h3>
    </div>
    );

const OuterTitle = () =>(
    <div>
        <h1>This is the outer component</h1>
        <TitleComponent/>
    </div>
)
const root = createRoot(document.getElementById("root"));
root.render(<OuterTitle/>);
