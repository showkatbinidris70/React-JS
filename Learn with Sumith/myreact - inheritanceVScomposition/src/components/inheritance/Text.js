import Emoji from "./Emoji";

export default class Text extends Emoji{
    constructor(props) {
        super(props);
    }

    render() {
        const decorateText = this.addEmoji('I am JavaScript Language ', '😃')
        return super.render(decorateText);
    }
}