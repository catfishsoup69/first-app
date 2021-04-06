import React, { useState, useCallback, useEffect } from 'react';

import { Message } from '../Message/message';
import { authors } from '../../utils/constants';

import './messageField.scss'

const MessageField = () => {

  const [messageArr, setMessageArr] = useState([])

  const addMessage = useCallback((newMessage) => {
    setMessageArr([...messageArr, {...newMessage, id: messageArr.length}])
  }, [messageArr])

  useEffect(() => {
    let timeout;

    if (messageArr[messageArr.length - 1]?.author === 'human') {
      timeout = setTimeout(() => {
        addMessage({text: 'Смотри, я отвечаю! :)', author: authors.bot, id: messageArr.length})
      }, 750)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [messageArr])

  return (
    <div className='message-field'>
      <div className='message-field--sended'>
        { messageArr.map(({author, text, id}) => {
          return (
            <div key={ id } className={author === 'human' ? 'right' : ''}>
              { author }: { text }
            </div>
          )
        })}
      </div>
      <Message addMessage={ addMessage }/>
    </div>
  )
}

export { MessageField };