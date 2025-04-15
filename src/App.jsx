import { useState } from "react";
import arvatoLogo from "/arvato-logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href="https://www.arvato-systems.com/more/press/arvato-systems-opens-latvia-office"
          target="_blank"
          rel="noreferrer"
        >
          <img src={arvatoLogo} className="logo arvato" alt="Arvato logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Arvato Systems logos to learn more
      </p>
    </>
  );
}

export default App;
