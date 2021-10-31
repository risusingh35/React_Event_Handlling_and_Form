import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [buttonColor, setButtonColor] = useState(false);
  const [headingText, setHeadingText] = useState("");
  function hendleChange(Event) {
    setName(Event.target.value);
  }
  function eventChange() {
    setHeadingText(name);

    Event.preventDefault();
  }
  function HandleMouseOver() {
    setButtonColor(true);
  }
  function HandleMouseOut() {
    setButtonColor(false);
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>

      <form onSubmit={eventChange}>
        <input
          onChange={hendleChange}
          type="text"
          placeholder="What's your name?"
          // value={name}
        />
        <button
          onMouseOver={HandleMouseOver}
          onMouseOut={HandleMouseOut}
          style={{ backgroundColor: buttonColor ? "black" : "white" }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
