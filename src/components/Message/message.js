import React, {useState} from "react";

const Message = ({addMessage}) => {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <form>
      <input type='text' value={text} placeholder='Пиши сюда' onChange={handleChange}/>
      <input type='submit' onSubmit={handleSubmit}/>
    </form>
  )
}

export {Message}