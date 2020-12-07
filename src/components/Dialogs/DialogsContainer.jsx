
import { connect } from 'react-redux';
import { updateMessageActionCreator, sendMessageActionCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendButton: () => {
            dispatch(sendMessageActionCreator())
        },
        changeMessage: (mesBody) => {
            dispatch(updateMessageActionCreator(mesBody))
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;