
import React, { Component } from 'react'

class EVENT_HANDALER_CLASS extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             changedValue : ''
        }
    }
    
    handalerOnChange = (e) => {
        this.setState({
            changedValue : e.target.value
        }, ()=>{
            console.log(this.state.changedValue)
        }) 
        
    }

    render() {
        return (
            <div>
                <input type="text"  onChange={this.handalerOnChange}/>
                <p>{this.state.changedValue}</p>
            </div>
        )
    }
}
export default EVENT_HANDALER_CLASS
