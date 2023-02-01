import './App.css';
import ClockComponent from "./components/ClockComponent";
import ClockListComponent from "./components/ClockListComponent";

function App() {
    const quantities = [1, 2, 3];
    return (
        <div>
            {/*<ClockComponent />*/}
            <ClockListComponent quantities={quantities}/>
        </div>
    );
}

export default App;
