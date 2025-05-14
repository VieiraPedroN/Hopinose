import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import image from "./assets/pngwing.com.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://www.youtube.com/watch?v=uKcscmZD3eY" target="_blank">
          <img src={image} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Você vai clicar no botão</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Botão do click infinito dos Deuses trancedentais do IF {count}
        </button>
      </div>
    </>
  );
}

export default App;
