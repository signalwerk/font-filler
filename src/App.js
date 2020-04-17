import React, { useReducer } from "react";
import DropFont from "./DropFont";
import { Provider } from "./Store";
import { reducer, initialState } from "./Reducer";
import Header from "./Header";
import FontInfo from "./FontInfo";
import FillSelect from "./FillSelect";

import "./App.css";

function App() {
  const useState = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Provider value={useState}>
        <Header />
        <DropFont />
        <hr />

        <FontInfo />
        <FillSelect />

        <p className="small">
          Thanks to{" "}
          <a
            className="App-link"
            href="https://github.com/opentypejs/opentype.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            opentype.js
          </a>
        </p>
      </Provider>
    </div>
  );
}

export default App;
