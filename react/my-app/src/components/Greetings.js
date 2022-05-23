import React from 'react'
import Guest from './Guest';
import User from './User'


export default function Greetings(props) {
    // const isLogin = props.isLogin;
    // if(isLogin){
    //     return  <User />
    // }else{
    //     return  <Guest />
    // }
  return (
    <div>
       {props.name == "Shohag" && "Welcome "+props.name}
       {props.name == "Showkat" && "Welcome"}
    </div>
  )
}
