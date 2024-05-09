import { useState } from "react";

function Nav(props) {
  return (
    <ol>
      {props.index.map((x, i) => {
        return (
          <li key={i}>
            <button
              onClick={() => {
                props.setSelected(i);
                props.setMode("view");
              }}
            >
              {x}
            </button>
          </li>
        );
      })}
    </ol>
  );
}

function App() {
  const [index, setIndex] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [selected, setSelected] = useState(0);
  const [mode, setMode] = useState("view");
  const [topic, setTopic] = useState("");

  return (
    <div>
      <h1>Hello, WEB!</h1>
      <Nav index={index} setSelected={setSelected} setMode={setMode} />
      {mode === "view" && (
        <>
          <p>I love {index[selected]}</p>
          <button
            onClick={() => {
              setMode("create");
              setTopic("");
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
          <button
            onClick={() => {
              setSelected(index.length);
              setIndex((prev) => {
                prev.push(topic);
                return prev;
              });
              setMode("view");
            }}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default App;
