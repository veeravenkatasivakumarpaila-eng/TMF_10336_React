import React from "react";
import { createRoot } from "react-dom/client";

const TitleComponent =({color,text1,text2,text3}) => (
    <div className="title" style={{color}}>
        <h1>{text1}</h1>
        <h2>{text2}</h2>
        <h3>{text3}</h3>
    </div>
    );
const root = createRoot(document.getElementById("root"));
root.render(<TitleComponent
color="red"
text1="Heading1"
text2="Heading2"
text3="Heading3"/>);
