import React from "react";


const date = new Date();
const getDay = date.getDate();
const getMonth = date.getMonth() + 1;
const currentDate = date.getFullYear();


function CardComponent(props) {
    console.log(props);
    const {todoTitle, todoDesc} = props;
    return (
        <div className='card'>
            <h3 className='todoTitle'>
                {todoTitle}</h3>
            <p className='tododesc'>
                {todoDesc}</p>
            <p className='date'>
                {
                getDay + "-" + getMonth + "-" + currentDate
            }</p>
        </div>
    );
}
export default CardComponent;
