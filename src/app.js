import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import {Button} from './components/Button/button'

const App = () => {

  const [messageArr, setMessageArr] = useState([])

  const addMessage = () => {
    setMessageArr([...messageArr, 'Нормально'])
    console.log(messageArr);
  }


  return (
    <React.Fragment>
      <h1>Привет! Как дела?</h1>
      <Button onClick={ addMessage } />
      {messageArr.map((message) => {
        return (
          <div>{ message }</div>
        )
      })}
    </React.Fragment>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));