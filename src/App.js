function App() {
  const index = ["HTML", "CSS", "JavaScript", "React"];
  return (
    <div>
      <h1>Hello, WEB!</h1>
      <ol>
        {index.map((x, i) => {
          return <li key={i}>{x}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
