import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let upCase = text.toUpperCase();
    setText(upCase);
    props.showalert("Text has been uppercase", "success");
  };
  const handleLowClick = () => {
    let upCase = text.toLowerCase();
    setText(upCase);
    props.showalert("Text has been uppercase", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Text has been copied", "success");
  };
  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Text has been removed spaces", "success");
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showalert("Text has been cleared", "success");
  };
  const handleCapWord = () => {
    let words = text.split(" ");
    let newSentence = "";

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let firstWord = word.charAt(0).toUpperCase();
      let restWord = word.slice(1);
      let convertedWord = firstWord + restWord;
      newSentence += convertedWord + " ";
    }

    setText(newSentence.trim());
    props.showalert("Text has been capitalized", "success");
  };

  return (
    <div className="container my-1">
      <div style={{ color: props.mode === "dark" ? "whiteSmoke" : "black" }}>
        <h1>Enter The Texts To Analize</h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            id="myBox"
            rows="8"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "whiteSmoke" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveSpaces}
        >
          Remove Text Spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapWord}>
          Convert CapitalizeWord
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear Text
        </button>

        <div className="container my-3">
          <h1>Your Text Summery</h1>
          <p>
            {
              text.split(/\s+/).filter((ele) => {
                return ele.length !== 0;
              }).length
            }{" "}
            words {text.length} charecters{" "}
          </p>
          <h3>Read</h3>
          <p>
            {0.008 *
              text.split(" ").filter((ele) => {
                return ele.length !== 0;
              }).length}{" "}
            Minutes Read
          </p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default TextForm;
