import React from 'react'

export default function NumberList(props) {
    const numberslist = props.numbers;
    const listItems = numberslist.map((number) =>
    <li key={number.toSring()}>
        {number}
    </li>
    );
    const numbers = [1, 2, 3, 4, 5];
  return (
    <ul>{listItems}</ul>
  )
}


