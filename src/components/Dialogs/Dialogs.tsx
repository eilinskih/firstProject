import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../Redux/redux-store';

import d from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';
import { DialogsStateType, sendMessage } from '../../Redux/dialogsReducer';

const Dialogs: React.FC = () => {
    const dispatch = useDispatch();
    const dialogsPage = useSelector<StateType, DialogsStateType>((state) => { return state.dialogsPage });
    const dialogsElements = dialogsPage.dialogsData.map((dialog) => < DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />);
    const messagesElements = dialogsPage.messagesData.map((message) => < Message key={Date.now()} message={message.message} />);

    const onSubmit = (formData: any) => {
        dispatch(sendMessage(formData.message));
    };

    return (
        <div className={d.dialogs}>
            <div className={d.dialogers}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                <div>{messagesElements}</div>
                <div>
                    <DialogsReduxForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    );
};

function MessageForm(props: any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component="textarea" type="text" name="message" placeholder="New messsage" /></div>
            <div><button >send</button></div>
        </form>);
};

const DialogsReduxForm = reduxForm({ form: "dialogs" })(MessageForm);

export default Dialogs;