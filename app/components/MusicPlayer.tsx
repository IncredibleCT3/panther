import React from 'react'
import SideBar from './SideBar';

const MusicPlayer = () => {
  return (
    <div className="main-container flex space-around">
        <SideBar />
        <div className="audio-container">
            Audio Player
        </div>
    </div>
  );
}

export default MusicPlayer;