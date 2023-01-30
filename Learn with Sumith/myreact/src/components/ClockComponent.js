import React from "react";
import ReactDOM from "react-dom/client";

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

    handleClock = () => {
        this.setState({
            locale: "en-US"
        });
        console.log("clicked")
    }

    render() {
        const {locale} = this.state;
        return (
            <div>
                <span>{this.state.date.toLocaleTimeString(locale)}</span><br/>
                <button type="button" onClick={this.handleClock}>Click Here</button>
            </div>
        );
    };
}

export default ClockComponent;