import React from 'react';
import m from './Message.module.css';

function Message(props) {
    return (
        <div className={m.message}>{props.message}</div>
    );
}

export default Message;