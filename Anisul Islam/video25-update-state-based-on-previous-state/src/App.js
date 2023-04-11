import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((pre) => {
      return pre + 1;
    });
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
