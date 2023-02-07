import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style.css';
import Card from './components/Card';


ReactDOM.render(
  <div>
    <h1 className='appName'>{appName}</h1>
   <Card />
  </div>,
  document.getElementById('root')
);

reportWebVitals();
