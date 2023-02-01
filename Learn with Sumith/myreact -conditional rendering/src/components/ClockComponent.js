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
        const {date, locale} = this.state;

        // conditional rendering

        // let button;
        // if (locale === 'bn-BD') {
        //     button = (
        //         <ButtonComponent change={this.handleClock} locale="en-US">Click Here</ButtonComponent>
        //     );
        // } else {
        //     button = (
        //         <ButtonComponent change={this.handleClock} locale="bn-BD">Click Here</ButtonComponent>
        //     );
        // }
        return (
            <div>
                <span>{date.toLocaleTimeString(locale)}</span><br/>
                {locale == 'bn-BD' ?
                    <ButtonComponent change={this.handleClock} locale="en-US" show={false} enable={false}/> :
                    <ButtonComponent change={this.handleClock} locale="bn-BD" show={true} enable={true}/>
                }
            </div>
        );
    };
}

export default ClockComponent;