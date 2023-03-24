import React from "react";
import ReactDOM from "react-dom/client";
import ButtonComponent from "./ButtonComponent";

class ClockComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {date: new Date(), locale: 'bn-BD'};
    //     // this.handleClock = this.handleClock.bind(this);
    // }

    state = {date: new Date(), locale: 'bn-BD'};

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer)
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    handleClock = (locale) => {
        this.setState({
            locale: locale,
        });
    }

    render() {
        const {locale} = this.state;
        return (
            <div>
                <span>{this.state.date.toLocaleTimeString(locale)}</span><br/>
                <ButtonComponent change={this.handleClock} locale="en-US">Click Here</ButtonComponent>
            </div>
        );
    };
}

export default ClockComponent;