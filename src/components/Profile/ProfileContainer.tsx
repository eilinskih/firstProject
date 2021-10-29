import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/WithAuthRedirect";
import Profile from './Profile';

export default compose<typeof Profile>(
    withRouter,
    withAuthRedirect
    )(Profile);