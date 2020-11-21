import React from 'react';
import {updateMessageActionCreator, sendMessageActionCreator} from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';

function DialogsContainer(props) {
let state = props.store.getState();

    let onSendClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    };
    
    let onNewMessageChange = (mesBody) => { 
props.store.dispatch(updateMessageActionCreator(mesBody));
    };
    
    
    return (
        <Dialogs sendButton={onSendClick} changeMessage={onNewMessageChange} dialogsData={state.dialogsPage.dialogsData} messagesData={state.dialogsPage.messagesData} newMessageText={state.dialogsPage.newMessageText}/>
    );
}

export default DialogsContainer;