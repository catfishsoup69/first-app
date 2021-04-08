import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom';
import { ChatList } from '../ChatList/chatList';
import {headerMenu} from '../../utils/constants';

export const Header = () => {
  return (
    <>
      <h1 className='header'> Болталка </h1>
      <nav className='menu'>
        <ul className='menu__list'>
          {headerMenu.map(({link,title}) =>
          {
            return(
              <li key={link}><Link to={ link }>{ title }</Link></li>
            )
          })}
        </ul>
      </nav>
      <ChatList />

    </>
  )
}