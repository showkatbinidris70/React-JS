import './App.css';
import CardComponent from "./components/CardComponent";
import Data from "./data.json";

function App() {
    const appName = 'Todo App';
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const contactDate = day + "-" + "0" + month + "-" + year;

    let items = [];
    //using for loop
    // for (let i = 0; i < Data.length; i++) {
    //     items.push(<CardComponent title={Data[i].title} desc={Data[i].desc} mobile={Data[i].mobile}/>)
    // }

    //using map
    // items = Data.map((item, index) => <CardComponent key={index} title={item.title} desc={item.desc} mobile={item.mobile}/>);

    return (
        <div>
            <h1 className="appName">{appName}</h1>
            <div className="components">
                {/*calling array */}
                {/*{items}*/}
                {Data.map((item, index) => <CardComponent key={index} title={item.title} desc={item.desc} mobile={item.mobile}/>)}
            </div>
        </div>
    );
}

export default App;
