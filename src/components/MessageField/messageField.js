import React, { useState, useCallback, useEffect } from 'react';

import { Message } from '../Message/message';
import { authors } from '../../utils/constants';

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
    <>
      <Message addMessage={ addMessage }/>
      { messageArr.map(({author, text, id}) => {
        return (
          <div key={ id }>
            { author }: { text }
          </div>
        )
      }) }
    </>
  )
}

export { MessageField };