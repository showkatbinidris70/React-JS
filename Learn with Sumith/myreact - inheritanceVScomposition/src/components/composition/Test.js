import React from "react";

function Test(addEmoji) {
    const text = 'I am JS Language';
    return <div>{addEmoji ? addEmoji(text, '😃') : text}</div>;
}

export default Test;