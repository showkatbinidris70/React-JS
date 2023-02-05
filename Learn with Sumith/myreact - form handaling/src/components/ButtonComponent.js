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
        const {change, locale, show, enable} = this.props;
        if (!enable) return null;
        return (
            <div>
                <button type="button" onClick={() => change(locale)}>
                    {locale === "bn-BD" ? "Change Clock" : "ঘড়ি পরিবর্তন করুন"}
                </button>
                {show && <p>Hello...</p>}
            </div>
        );
    }
}

export default ButtonComponent;