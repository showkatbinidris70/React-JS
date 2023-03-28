import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import "./App.css";
import Fish from "./pages/Fish";
import Home from "./pages/Home";
import LiveStock from "./pages/LiveStock";
import Plant from "./pages/Plant";
import Process from "./pages/Process";
import {GlobalStyle} from "./styles/Global.styled";

const Theme = {
    color: {
        black: "#000",
        white: "#ffffff"
    },
    mobile: "980px",
    smallMobile: "580px"
};

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle/>
            <Router>
                <div className="App">
                    {/* <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Plant">About Us</Link>
            </li>
            <li>
              <Link to="/Process">Contact Us</Link>
            </li>
            <li>
              <Link to="/LiveStock">Contact Us</Link>
            </li>
            <li>
              <Link to="/Fish">Contact Us</Link>
            </li>
          </ul> */}
                    <Routes>
                        <Route exact path="/"
                            element={<Home/>}></Route>
                        <Route exact path="/Plant"
                            element={<Plant/>}></Route>
                        <Route exact path="/process"
                            element={<Process/>}></Route>
                        <Route exact path="/LiveStock"
                            element={<LiveStock/>}></Route>
                        <Route exact path="/Fish"
                            element={<Fish/>}></Route>
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
