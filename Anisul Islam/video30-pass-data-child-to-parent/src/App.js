import "./App.css";
import Child from "./Child";

function App() {
  const data = "This is parent component";
  const handleChildData = () => {
    console.log("hello");
  };
  return (
    <div>
      <Child data={data} onChildData={handleChildData} />
    </div>
  );
}

export default App;
