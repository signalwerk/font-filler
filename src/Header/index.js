import React from "react";

function Header() {
  return (
    <header className="Header">
      <hr />
      <h1>FontFiller</h1>
      <hr />
      <p>
        Inspect fonts and generate missing whitespace characters
        for&nbsp;incomplete&nbsp;fonts.
      </p>

      <p className="small">
        Code by Stefan Huber ·{" "}
        <a
          className="App-link"
          href="https://github.com/signalwerk/fontfiller/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          OpenSource on GitHub
        </a>
      </p>
      <hr />
    </header>
  );
}

export default Header;
