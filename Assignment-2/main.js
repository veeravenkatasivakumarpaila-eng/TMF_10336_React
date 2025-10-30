import React from "react";
import { createRoot } from "react-dom/client";
const App = () => {
  return (
    <div>
      <h1>It is a React Head Component4</h1>
    </div>
  );
};

var htmlRoot = document.getElementById("root");
var rootReact = createRoot(htmlRoot);

rootReact.render(<App />);
