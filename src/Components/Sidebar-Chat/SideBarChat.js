import { Avatar } from '@material-ui/core';
import React from 'react';
import './SideBarChat.css';
const SideBarChat = () => {
  return (
    <div className='sidebarChat'>
      <Avatar />
      <div className='sidebarChat_info'>
        <h2>Room Name</h2>
        <p>Last message...</p>
      </div>
    </div>
  );
};

export default SideBarChat;
