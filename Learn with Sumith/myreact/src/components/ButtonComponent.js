import React from "react";

class ButtonComponent extends React.Component {
    shouldComponentUpdate(nextProps) {
        const {change: currentChange} = this.props;
        const {change: nextChange} = nextProps;
        if (currentChange === nextChange) {
            return false;
        }
        return true;
    }

    render() {
        const {change, locale} = this.props;
        return (
            <button type="button" onClick={() => change(locale)}>Click Here</button>
        );
    }
}

export default ButtonComponent;