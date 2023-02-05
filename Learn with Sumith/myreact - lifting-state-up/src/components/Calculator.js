import React from "react";
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from "./TemperatureInput";
import {converter, toCelsius, toFahrenheit} from '../lib/converter'

class Calculator extends React.Component {
    state = {temperature: "", scale: "c"};

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const {temperature, scale} = this.state;

        const celsius = scale === "f" ? converter(temperature, toCelsius) : temperature;
        const fahrenheit = scale === "c" ? converter(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleChange}/>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </div>
        );
    }
}

export default Calculator;