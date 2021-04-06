import React, { useState } from 'react';
import { authors } from '../../utils/constants';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';


const Message = ({addMessage}) => {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addMessage({text: text, author: authors.human})
    setText('')
  }

  return (
    <form onSubmit={ handleSubmit }>
      <TextField type='text' value={ text } id='outlined-basic' variant='outlined' label='Пиши сюда'
                 onChange={ handleChange } required/>
      <IconButton type='submit' color='primary'>
        <SendIcon />
      </IconButton>
      {/*<input />*/}
    </form>
  )
}

export { Message }