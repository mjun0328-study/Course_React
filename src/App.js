function App() {
  const index = ["HTML", "CSS", "JavaScript", "React"]; // 원래 있던 코드
  let selected = 0;

  return (
    <div>
      <h1>Hello, WEB!</h1>
      <ol>
        {index.map((x, i) => {
          return (
            <li key={i}>
              <button
                onClick={() => {
                  selected = i;
                }}
              >
                {x}
              </button>
            </li>
          );
        })}
      </ol>
      <p>I love {index[selected]}</p>
    </div>
  );
}

export default App;
