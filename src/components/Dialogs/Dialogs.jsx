import React from 'react';
import d from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';
import { Field, reduxForm } from 'redux-form';


function Dialogs(props) {

    let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => < DialogsItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.dialogsPage.messagesData.map((message) => < Message message={message.message} />);



    let onSubmit = (formData) => {
        props.sendMessage(formData.message);
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
    )
}
function MessageForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component="textarea" type="text" name="message" placeholder="New messsage" /></div>
            <div><button >send</button></div>
        </form>)
}

let DialogsReduxForm = reduxForm({ form: "dialogs" })(MessageForm)


export default Dialogs;