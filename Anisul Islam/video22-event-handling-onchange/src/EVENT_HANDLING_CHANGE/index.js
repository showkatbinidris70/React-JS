import React, {Component} from 'react'

export default class EVENT_HANDLING_CHANGE extends Component {
    constructor(props) {
        super(props)

        this.state = {
            changedValue: ''
        }
    }
    handleChange = (event) => {
        this.setState({changedValue: event.target.value})
    }
    render() {
        return (
            <div>
                <input type='text'
                    onChange={
                        this.handleChange
                    }/>
                <h3>{
                    this.state.changedValue
                }</h3>
            </div>
        )
    }
}
