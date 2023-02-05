import React from "react";

class Form extends React.Component {
    state = {
        title: "JavaScript",
        textarea: "JavaScript is awesome language",
        library: "React JS",
        isAwesome: true,
    };

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                textarea: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked,
            });
        } else {
            console.log(e.target.type)
            console.log("nothing")
        }

    }
    submitHandler = (e) => {
        e.preventDefault();
        const {title, textarea, library, isAwesome} = this.state;
        console.log(title, textarea, library, isAwesome)
    }

    render() {
        const {title, textarea, library, isAwesome} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="Type here..." value={title} onChange={this.handleChange}/><br/><br/>
                    <textarea name="text" rows="5" cols="30" value={textarea}
                              onChange={this.handleChange}></textarea><br/><br/>
                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select><br/><br/>
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange}/><br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Form;