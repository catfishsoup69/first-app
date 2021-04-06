import React, { useState } from 'react';

import { authors } from '../../utils/constants';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import './message.scss'


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
    <form className='message' onSubmit={ handleSubmit }>
      <TextField className='message__text-field' type='text' value={ text } id='outlined-basic' variant='outlined' label='Пиши сюда' onChange={ handleChange } required/>
      <IconButton className='message__btn' type='submit' color='primary'>
        <SendIcon />
      </IconButton>
    </form>
  )
}

export { Message }