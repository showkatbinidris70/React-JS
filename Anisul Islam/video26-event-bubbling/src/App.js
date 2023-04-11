import "./App.css";

function App() {
  const handleParent = (event) => {
    console.log("parent", event);
  };

  const handleChildClick = (event) => {
    event.stopPropagation();
    console.log("Child", event);
  };

  return (
    <div className="parent" onClick={handleParent}>
      <h1>Welcome</h1>
      <button onClick={handleChildClick}>Bubbling</button>
    </div>
  );
}

export default App;
