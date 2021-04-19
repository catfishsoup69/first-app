import React from 'react';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { Header } from './Header/header';
import { HomePage } from '../pages/HomePage/home'
import { App } from '../pages/App/app'
import { PersonalPage } from '../pages/PersonalPage/personal';

import './routes.scss'
import { ChatList } from './ChatList/chatList';


export const Routes = () => {
  return (
    <Router>
      <div className='container'>
      <Header />


      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/chat'>
          <ChatList />
        </Route>
        <Route path='/chat/:chatId'>
          <App />
          <ChatList />
        </Route>
        <Route path='/personal'>
          <PersonalPage />
        </Route>
      </Switch>
      </div>
    </Router>
  )
}