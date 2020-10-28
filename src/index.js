import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";

import "./styles.css";

function App() {
  const [phrase, setPhrase] = useState("");

  if (phrase === "Razor") {
    alert("AHOU");
  }

  return (
    <div className="App">
      <h2>Mot de passe?</h2>

      <input
        type="text"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        placeholder="mot de passe"
      />

      <p>
        Conseil: le secret est{" "}
        <strong>
          Electro wolfy boy from genshin impact(première lettre en CAPITAL)
        </strong>
      </p>

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
