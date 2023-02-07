import CardComponent from "./components/CardComponent";
import Data from './Data.json';
import UniqueIdComponent from "./components/UniqueIdComponent";
import NestedMap from "./components/NestedMap";

function App() { // console.log(Data);
    let items = [];
    //
    // for(let x = 0; x < Data.length; x++){
    //     console.log(Data[x]);
    //     items.push(<CardComponent todoTitle={Data[x].title} todoDesc={Data[x].desc} />)
    // }
    items = Data.map((item, index) => <CardComponent key={index}
        todoTitle={
            item.title
        }
        todoDesc={
            item.desc
        }/>);


    return (
        <div>
            <h1 className="heading">Todo App</h1>
            {/*use map*/}
            {/*    {Data.map((item, index) =>{*/}
            {/*   return <CardComponent key={index} todoTitle={item.title} todoDesc={item.desc}/>*/}
            {/*})};*/}
            {/*    {items};*/}
            {items}
            <UniqueIdComponent/>

            <NestedMap/>
        </div>
    );
}
export default App;
