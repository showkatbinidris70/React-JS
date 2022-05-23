import React from 'react';
import ReactDOM from 'react-dom';
import LoginControl from './components/LoginControl';
import NumberList from './components/NumberList';
import reportWebVitals from './reportWebVitals';


const totoTitle = "Todo Title";
const date = new Date();
const day = date.getDate();
const month = date.getMonth()+1;
const fullYear = date.getFullYear();

ReactDOM.render(
 <div>
   <h1 className='header'>Todo App </h1>
    <h3>{totoTitle}</h3>
    <p>{day+" / "+month+" / "+ fullYear}</p>
    <p>Lorem lorem sadipscing aliquyam amet aliquyam, sit dolore vero takimata.</p>
    <p>Lorem lorem sadipscing aliquyam amet aliquyam, sit dolore vero takimata.</p>

    <NumberList  numbers={numbers}/>
 </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
