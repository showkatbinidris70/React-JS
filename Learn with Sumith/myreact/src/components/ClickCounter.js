import React from "react";
import withCounter from "./HOC/withCounter";

const ClickCounter = (props) => {
    const {count, incrementCount} = props;
    return (
        <button type="button" onClick={incrementCount}>Clicked {count} times</button>
    );
}
export default withCounter(ClickCounter);