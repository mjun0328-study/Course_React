import { useState } from "react";

function App() {
  const index = ["HTML", "CSS", "JavaScript", "React"]; // 원래 있던 코드
  const [selected, setSelected] = useState(0);
  const [verb, setVerb] = useState("love");

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
      <p>
        I {verb} {index[selected]}
      </p>
      <div>
        <button
          onClick={() => {
            setVerb("love");
          }}
        >
          LOVE
        </button>
        <button
          onClick={() => {
            setVerb("hate");
          }}
        >
          HATE
        </button>
      </div>
    </div>
  );
}

export default App;
