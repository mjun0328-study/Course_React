import { useState } from "react";

function App() {
  const index = ["HTML", "CSS", "JavaScript", "React"]; // 원래 있던 코드
  const [selected, setSelected] = useState(0);
  const [counter, setCounter] = useState(0);

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
      <p>I love {index[selected]}</p>
      <div>
        <button
          onClick={() => {
            setCounter((prev) => {
              return prev - 1;
            });
          }}
        >
          -
        </button>
        <span>{counter}</span>
        <button
          onClick={() => {
            setCounter((prev) => {
              return prev + 1;
            });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
