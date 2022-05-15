import React, { useEffect, useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
const Chat = () => {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log('you typed', input);
    setInput('');
  };
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='chat_headerInfo'>
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className='chat_headerRight'>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        <p className={`chat_message ${true && 'chat_reciever'}`}>
          <span className='chat_name'>Shaarif Shahid</span>
          Hi Guys
          <span className='chat_timestamp'>2:45pm</span>
        </p>
      </div>
      <div className='chat_footer'>
        <EmojiEmotionsOutlinedIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Type a message...'
          />
          <button type='submit' onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <MicOutlinedIcon />
      </div>
    </div>
  );
};

export default Chat;
