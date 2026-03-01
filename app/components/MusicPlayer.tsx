import React from 'react'
import SideBar from './SideBar';

const MusicPlayer = () => {
  return (
    <div className="main-container flex space-around">
        <SideBar />
        <div className="audio-container flex flex-column space-between">
            <div className="thumbnail-container">
                
            </div>
            <div className="controls-container">

            </div>
        </div>
    </div>
  );
}

export default MusicPlayer;