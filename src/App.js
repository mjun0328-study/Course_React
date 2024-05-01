function App() {
  const index = ["HTML", "CSS", "JavaScript", "React"];
  return (
    <div>
      <h1>Hello, WEB!</h1>
      <ol>
        {index.map((x, i) => {
          return (
            <li key={i}>
              <button
                onClick={() => {
                  alert("I am " + x);
                }}
              >
                {x}
              </button>
            </li>
          );
        })}
      </ol>
      <p>I love WEB</p>
    </div>
  );
}

export default App;
