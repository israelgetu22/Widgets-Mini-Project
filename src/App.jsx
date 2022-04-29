import React from "react";
import Accordion from "./Components/Accordion";

const items = [
  {
    title: "What is your name?",
    content: "Israel Getu",
  },
  {
    title: "Where do you live?",
    content: "Texas",
  },
  {
    title: "What is your favorite color?",
    content: "Blue",
  },
];

function App() {
  return (
    <div>
      {/* <br /> */}
      <Accordion items={items} />
    </div>
  );
}

export default App;
