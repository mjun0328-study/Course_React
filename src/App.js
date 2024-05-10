import { useState } from "react";

function Nav({ index, setSelected, setMode }) {
  return (
    <ol>
      {index.map((x, i) => {
        return (
          <li key={i}>
            <button
              onClick={() => {
                setSelected(i);
                setMode("view");
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

function View({ index, selected, setMode, setTopic }) {
  return (
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
  );
}

function Create({ index, setIndex, setSelected, setMode, topic, setTopic }) {
  return (
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
        <View
          index={index}
          selected={selected}
          setMode={setMode}
          setTopic={setTopic}
        />
      )}
      {mode === "create" && (
        <Create
          index={index}
          setIndex={setIndex}
          setSelected={setSelected}
          setMode={setMode}
          topic={topic}
          setTopic={setTopic}
        />
      )}
    </div>
  );
}

export default App;
