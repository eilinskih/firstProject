import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login'
import { connect } from 'react-redux';
import { compose } from 'redux';
import {initialize} from './Redux/appReducer'
import Preloader from './components/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initialize()
  }

  render() {
    if (!this.props.isInitialized) return <Preloader/>
    return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="wrapper_content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <Login />} />

        </div>
      </div>
    </BrowserRouter>
  );
}}

let mapStateToProps = (state) => ({isInitialized: state.app.isInitialized})
export default compose(connect(mapStateToProps, {initialize}))(App);
