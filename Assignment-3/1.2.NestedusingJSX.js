import React from "react";
import { createRoot } from "react-dom/client";

const jsxHeader = (
    <div className="title">
        <h1>Heading 1 using JSX</h1>
        <h2>Heading 2 using JSX</h2>
        <h3>Heading 3 using JSX</h3>
    </div>
)
const root = createRoot(document.getElementById("root"));
root.render(jsxHeader);
