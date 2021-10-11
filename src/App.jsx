import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initialize } from './Redux/appReducer'
import Preloader from './components/Preloader/Preloader';
import { Provider } from 'react-redux';
import store from './Redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Login = React.lazy(() => import('./components/Login/Login'));


class App extends React.Component {

  componentDidMount() {
    this.props.initialize()
  }

  render() {
    if (!this.props.isInitialized) return <Preloader />
    return (
      <div className="wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="wrapper_content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />

          <React.Suspense fallback={<Preloader />}>
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <Login />} />
          </React.Suspense>

        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({ isInitialized: state.app.isInitialized })
let AppContainer = compose(connect(mapStateToProps, { initialize }))(App);

let AppRoot = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider> 
  </BrowserRouter>

}
export default AppRoot;
