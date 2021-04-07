import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

import { chats } from '../../utils/constants';

const ChatList = () => {
  return (
    <List className='chat-list'>
      { chats.map(({ title}) => {
        return (
          <ListItem key={ title }>
            <ListItemAvatar>
              <Avatar>{title[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={ title }/>
          </ListItem>
        )
      }) }
    </List>
  );
}

export { ChatList }