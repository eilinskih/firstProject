import React from 'react';
import d from './Dialogs.module.css';
import Message from './Message/Message';
import {updateMessageActionCreator, sendMessageActionCreator} from '../../Redux/State';
import DialogsItem from './DialogsItem/DialogsItem';


function Dialogs(props) {
    

    let dialogsElements = props.messagesPage.dialogsData.map( (dialog) =>  < DialogsItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.messagesPage.messagesData.map( (message) => < Message message={message.message}/> );
    let newMessageText = props.messagesPage.newMessageText;
    let onSendClick = () => {
        props.dispatch(sendMessageActionCreator());
    };
    
    let onNewMessageChange = (event) => {
let mesBody = event.target.value;
props.dispatch(updateMessageActionCreator(mesBody));
    };
    
    
    return (
        <div className={d.dialogs}>
            <div className={d.dialogers}>
               {dialogsElements}
                
            </div>
            <div className={d.messages}>
               <div>{messagesElements}</div>
               <div>
                   <div><textarea onChange={onNewMessageChange} value={newMessageText} placeholder='enter text'></textarea></div>
               <div><button onClick={onSendClick}>send</button></div>
               </div>
            </div>
            
        </div>
    );
}

export default Dialogs;