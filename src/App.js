import './App.css';
import SideBar from './Sidebar/SideBar';
import Chat from './Chat/Chat';
function App() {
  return (
    <div className='app'>
      <div className='app_body'>
        {/* sidebar */}
        <SideBar />
        {/* chat */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
