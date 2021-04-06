import React, {useState, useCallback, useEffect} from 'react';

import {Message} from './Message/message';
import {authors} from '../utils/constants';

const MessageField = () => {

  const [messageArr, setMessageArr] = useState([])

  const addMessage = useCallback((newMessage) => {
    setMessageArr([...messageArr, newMessage])
  }, [messageArr])

  useEffect(() => {
    if (messageArr[messageArr.length - 1]?.author === 'human') {
      addMessage({text: 'Смотри, я отвечаю! :)', author: authors.bot})
    }
  }, [messageArr])

  return (
    <>
      <h1>Болталка</h1>
      <Message addMessage={addMessage}/>
      {messageArr.map(({author, text}, i) => {
        return (
          <div key={i}>
            {author}: {text}
          </div>
        )
      })}
    </>
  )
}

export {MessageField};