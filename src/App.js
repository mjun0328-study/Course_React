import { useState } from "react";

function App() {
  const index = ["HTML", "CSS", "JavaScript", "React"]; // 원래 있던 코드
  const [selected, setSelected] = useState(0);
  const ________________________;

  return (
    <div>
      <h1>Hello, WEB!</h1>
      <ol>
        {index.map((x, i) => {
          return (
            <li key={i}>
              <button
                onClick={() => {
                  setSelected(i);
                }}
              >
                {x}
              </button>
            </li>
          );
        })}
      </ol>
      <p>______</p>
      <div>
        <button
          onClick={() => {
            ________________;
          }}
        >
          LOVE
        </button>
        <button
          onClick={() => {
            ________________;
          }}
        >
          HATE
        </button>
      </div>
    </div>
  );
}

export default App;
