import React from 'react'

import { MessageField } from '../../components/MessageField/messageField';
import { ChatList } from '../../components/ChatList/chatList';

import './app.scss'

const App = () => {

  return (
    <div className='messenger'>
      <MessageField/>
    </div>
  )
}

export { App };