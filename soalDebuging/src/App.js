import React, { useState } from "react";
import "./App.css";
import GitHubLogin from "./GithubLogin";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        {name && <h2>Hai {name}</h2>}
        <GitHubLogin
          clientId="9d77e2c6bb328f129216"
          clientSecret ="5612fdb2cffc0a0cc50b093c9371f453d3438253"
          redirectUri="http://localhost:3000/"
          onSuccess={(name) => setName(name)}
          onFailure={(resp) => console.log(resp)}
        />
      </header>
    </div>
  );
}

export default App;
