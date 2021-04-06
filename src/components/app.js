import React from 'react'

import { Header } from './Header/header';
import { MessageField } from './MessageField/messageField';
// import { ChatList } from './ChatList/chatList';

import styles from './app.scss'

const App = () => {

  return (
    <section className='messenger'>
      <Header/>
      <MessageField/>
      {/*<ChatList />*/ }
    </section>
  )
}

export { App };