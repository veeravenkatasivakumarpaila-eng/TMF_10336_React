import React from "react";
import { createRoot } from "react-dom/client";

const nestedHeader = React.createElement(
    "div",{className:"title"},
    React.createElement("h1",null,"Heading from first layer"),
    React.createElement("h2",null,"Heading from second layer"),
    React.createElement("h3",null,"Heading from third layer")
);
const root = createRoot(document.getElementById("root"));
root.render(nestedHeader);
