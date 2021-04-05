import React, {useState} from 'react';
import {authors} from '../../utils/constants'

const Message = ({addMessage}) => {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addMessage({text:text, author: authors.human})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={text} placeholder='Пиши сюда' onChange={handleChange}/>
      <input type='submit' />
    </form>
  )
}

export {Message}