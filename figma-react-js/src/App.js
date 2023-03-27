import {ThemeProvider} from 'styled-components';
import './App.css';
import Home from './pages/Home';
// import Plant from './pages/Plant';
// import Process from './pages/Process';
// import LiveStock from './pages/LiveStock';
// import Fish from './pages/Fish';
import {GlobalStyle} from './styles/Global.styled';

const Theme = {
    color: {
        black: "#000",
        white: "#ffffff"
    },
    mobile: "980px",
    smallMobile: "580px"
}

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle/>
            <Home/> {/* <Plant/> */}
            {/* <Process/> */}
            {/* <LiveStock/> */}
            {/* <Fish/> */} </ThemeProvider>
    );
}

export default App;
