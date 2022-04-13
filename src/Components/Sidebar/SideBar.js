import React from 'react';
import './SideBar.css';
import { Avatar } from '@material-ui/core';
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar />
      </div>
      <div className='sidebar_search'></div>
      <div className='sidebar_chats'></div>
    </div>
  );
};

export default SideBar;
