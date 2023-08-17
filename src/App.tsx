import React, { useState } from "react";
import "./App.scss";
import QuoteBox from "./components/QuoteBox";
import getRandomQuote from "./scripts/getRandomQuote";
import getRandomColor from "./scripts/getRandomColor";
import "bootstrap/dist/css/bootstrap.min.css";

interface QuoteBoxProps {
  quote: string;
  author: string;
  randomColor: string;
  getRandoms: () => void;
}

function App() {
  const [quoteInfo, SetQuote] = useState(getRandomQuote());
  const [randomColor, setRandomColor] = useState(getRandomColor());

  const getRandoms = () => {
    SetQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  const quoteProps: QuoteBoxProps = {
    ...quoteInfo,
    randomColor: randomColor,
    getRandoms,
  };

  return (
    <div className="App" style={{ backgroundColor: randomColor }}>
      <QuoteBox {...quoteProps} />
    </div>
  );
}

export default App;
