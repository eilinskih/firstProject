import React from 'react';
import m from './Message.module.css';

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={m.message}>{props.message}</div>
    );
}

export default Message;