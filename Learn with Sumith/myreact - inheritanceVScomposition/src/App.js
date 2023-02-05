import Test from "./components/composition/Test";
import Emoji from "./components/composition/Emoji";

function App() {
    return (
        <Emoji>
            {({addEmoji}) => <Test addEmoji={addEmoji}/>}
        </Emoji>
    );
}

export default App;
