import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QuoteBox.scss";

interface Props {
  quote: string;
  author: string;
  randomColor: string;
  getRandoms: () => void;
}

export default function QuoteBox(props: Props) {
  const { quote, author, randomColor, getRandoms } = props;

  let buttonStyles = {
    backgroundColor: randomColor,
    border: "none",
    transition: "all 1s ease",
  };

  return (
    <div className="box" style={{ color: randomColor }}>
      <h2>{quote}</h2>

      <div className="box__author">
        <p>{author}</p>
      </div>
      <div className="box__bottoms">
        <div className="box__socials">
          <Button style={buttonStyles}>
            <FontAwesomeIcon icon={faTwitter} />
          </Button>
          <Button style={buttonStyles}>
            <FontAwesomeIcon icon={faTumblr} />
          </Button>
        </div>
        <div className="box__newQuote">
          <Button style={buttonStyles} onClick={() => getRandoms()}>
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
