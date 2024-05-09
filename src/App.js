import { useState } from "react";

function App() {
  const [index, setIndex] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [selected, setSelected] = useState(0);
  const [mode, setMode] = useState("view");
  const [topic, setTopic] = useState("");

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
      {mode === "view" && (
        <>
          <p>I love {index[selected]}</p>
          <button
            onClick={() => {
              setMode("create");
            }}
          >
            Create
          </button>
        </>
      )}
      {mode === "create" && (
        <>
          <input
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
            }}
            placeholder="Enter new topic"
          />
          <button>Submit</button>
        </>
      )}
    </div>
  );
}

export default App;
