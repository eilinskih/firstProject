import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from './Redux/appReducer'
import Preloader from './components/Preloader/Preloader';
import { Provider } from 'react-redux';
import store, { StateType } from './Redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Login = React.lazy(() => import('./components/Login/Login'));


const App: React.FC = () => {
  const dispatch = useDispatch();
const isInitialized = useSelector<StateType, boolean>((state) => {return state.app.isInitialized});
  useEffect(() => {
    dispatch(initialize())
  }, [isInitialized, dispatch]);

    if (!isInitialized) return <Preloader />
    return (
      <div className="wrapper">
        <Header />
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
};

const AppRoot: React.FC = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider> 
  </BrowserRouter>

}
export default AppRoot;
