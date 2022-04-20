import React from 'react';
import './SideBar.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SideBarChat from '../Components/Sidebar-Chat/SideBarChat';
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar />
        <div className='sidebar_headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
          <SearchOutlinedIcon />
          <input placeholder='Search or start new chat' type='text' />
        </div>
      </div>
      <div className='sidebar_chats'>
        <SideBarChat addNewChat />
        <SideBarChat />
        <SideBarChat />
      </div>
    </div>
  );
};

export default SideBar;
