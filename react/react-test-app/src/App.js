import CardComponent from './components/CardComponent';
import Data from './hello.json'

function App() {
  let items = [];
  // for(let x = 0; x < Data.length; x++){
  //   items.push(<CardComponent title={Data[x].title} desc={Data[x].desc}/>);
  // }
  // items = Data.map((item) => <CardComponent title={item.title} desc={item.desc}/>);
  return (
    <div>
      <h1 className='todo-app'>Todo App</h1>
      {Data.map((item, index) => <CardComponent key={index} title={item.title} desc={item.desc}/>)}
    </div>
  );
}

export default App;
