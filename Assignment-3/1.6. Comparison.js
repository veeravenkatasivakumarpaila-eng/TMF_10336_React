import React from "react";
import { createRoot } from "react-dom/client";

const TitleComponent = () => (
  <div className="title">
    <h1>Hello from TitleComponent</h1>
  </div>
);

const App = () => (
  <div>
    <h2>Component Usage Examples</h2>

    <p>Using {"{TitleComponent}"} — just a reference, doesn’t render output:</p>
    {TitleComponent} 

    <p>Using {"{<TitleComponent/>}"} — renders JSX returned by component:</p>
    <TitleComponent />

    <p>
      Using {"{<TitleComponent></TitleComponent>}"}
      — equivalent to self-closing tag:
    </p>
    <TitleComponent></TitleComponent>
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
