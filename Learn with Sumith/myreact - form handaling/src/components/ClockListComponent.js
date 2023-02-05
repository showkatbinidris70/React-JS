import React from "react";
import ClockComponent from "./ClockComponent";

function ClockListComponent({quantities = []}) {
    return (
        <div>
            {quantities.map(() => (<ClockComponent key={Math.random()}/>))}
        </div>
    );
}

export default ClockListComponent;