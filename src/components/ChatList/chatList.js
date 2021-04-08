import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom'

import { chats } from '../../utils/constants';
import './chatList.scss'

const ChatList = () => {
  return (
    <List className='chat-list'>
      { chats.map(({title, id}) => {
        return (
            <ListItem key={ id }>
              <Link className='chat-list__link' to={ `/chat/${ id }` }>
              <ListItemAvatar>
                <Avatar>{ title[0] }</Avatar>
              </ListItemAvatar>
              <ListItemText primary={ title }/>
              </Link>
            </ListItem>
        )
      }) }
    </List>
  );
}

export { ChatList }