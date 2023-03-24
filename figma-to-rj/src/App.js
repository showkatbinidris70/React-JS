import {ThemeProvider} from 'styled-components';
import './App.css';
import Home from './pages/Home';
import {GlobalStyle} from './styles/Global.styled';

const Theme = {
    color: {
        black: "#000",
        white: "#fff"
    },
    mobile: "980px",
    smallMobile: "580px"
}

function App() {
    return (<ThemeProvider theme={Theme}>
        <GlobalStyle margin="0px" padding="0px"/>
        <Home/>
    </ThemeProvider>);
}

export default App;
