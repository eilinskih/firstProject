import { compose } from "redux";
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import Dialogs from './Dialogs'

export default compose<typeof Dialogs>(
    withAuthRedirect
)(Dialogs);