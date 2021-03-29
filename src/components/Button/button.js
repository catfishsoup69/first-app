import React from 'react';
import './button.scss';

const Button = ({onClick}) => {
  return(
    <button className='button' onClick={onClick}>Жмяк</button>
  )
}

export {Button};