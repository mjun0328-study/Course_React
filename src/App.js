function App() {
  const index = ["HTML", "CSS", "JavaScript", "React"];
  return (
    <div>
      <h1>Hello, WEB!</h1>
      <ol>
        {index.map((x, i) => {
          return (
            <li key={i}>
              <button>{x}</button>
            </li>
          );
        })}
      </ol>
      <p>I love WEB</p>
    </div>
  );
}

export default App;
