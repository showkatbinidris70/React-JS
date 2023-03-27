import {ThemeProvider} from 'styled-components';
import './App.css';
import Home from './pages/Home';
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
    return (<ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Home/>
    </ThemeProvider>);
}

export default App;
