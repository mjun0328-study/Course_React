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
      <Hello name="React" />
      <Hello name="JavaScript" />
      <Hello name="HTML" />
      <Hello name="Node.js" />
      <Hello name="WEB" />
      <Hello name="HTTP" />
    </div>
  );
}

function Hello({ name }) {
  return <p>Bye, {name}</p>;
}

export default App;
