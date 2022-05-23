import React, { Component } from 'react';
import Logout from './Logout';
import Login from './Login'


export default class LoginControl extends Component {
    constructor(props){
        super(props);
        this.onclick = this.onclick.bind(this);
    }
    onclick(){
        console.log("logout");
        if(this.props.isLogin){
           
            alert("Logout Button Clicked");
        }else{
            alert("Login Button Clicked");

        }
    }
  render() {
   const isLogin = this.props.isLogin;
    return (
      <div>
          {isLogin ? <Logout myFunction={this.onclick}/> : <Login myFunction={this.onclick} />}
      </div>
    )
  }
}
