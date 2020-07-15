import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
// eslint-disable-next-line
import { addPost } from './Redux/State';

function App(props) {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="wrapper_content">
      <Route path="/profile" render={ () => <Profile profilePage={ props.state.profilePage } dispatch= {props.dispatch}/>}/>
      <Route path="/dialogs" render={ () => <Dialogs messagesPage={props.state.messagesPage} dispatch= {props.dispatch}/>}/>
      <Route path="/news" render={ () => <News />}/>
      <Route path="/music" render={ () => <Music />}/>
      <Route path="/settings" render={ () => <Settings />}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
