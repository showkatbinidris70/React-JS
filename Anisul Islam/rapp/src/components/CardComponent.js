import React from "react";

function CardComponent(props) {
    const {title, desc,mobile, date} = props;
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{desc}</p>
            <h3>{mobile}</h3>
            <h4>{date}</h4>
        </div>
    );
}

export default CardComponent;