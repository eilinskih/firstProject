
import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessage } from '../../Redux/dialogsReducer';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import Dialogs from './Dialogs';





let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};



export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        sendMessage,
        })
)(Dialogs)