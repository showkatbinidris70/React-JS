import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

class CONDITIONAL_RENDERING extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogedIn : false
        }
    }
    
    render() {
        const {isLogedIn} = this.state
        let element;
      element = isLogedIn ? <HomePage /> : <LoginPage />
        return(
            <div>
                {element}
            </div>
        )
    }
}
export default  CONDITIONAL_RENDERING