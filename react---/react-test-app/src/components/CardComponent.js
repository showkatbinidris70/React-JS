
import React from 'react';



export default function CardComponent(props) {
  const {heading,title,desc} = props;
  return (
    <div className='card'>
        <h2 style={{color:"red", textAlign:"center"}}>{heading}</h2>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>2022</p>
    </div>
  )
}
