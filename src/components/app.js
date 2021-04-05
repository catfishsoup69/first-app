import React, {useState} from 'react';

// import {Button} from './Button/button'
import {Message} from './Message/message';
import authors from './../utils/constants'

const App = () => {

  // const chat = [
  //
  // ]

  const [messageArr, setMessageArr] = useState([])

  const addMessage = useCallback((newMessage) => {
    setMessageArr([...messageArr, newMessage])}, [])


  return (
    <React.Fragment>
      <h1>Болталка</h1>
      <Message addMessage={addMessage}/>
      {/*<Button onClick={addMessage}/>*/}
      {messageArr.map((message) => {
        return (
          <div>{message}</div>
        )
      })}
    </React.Fragment>
  )
}

export {App};