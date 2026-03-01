import React from 'react'
import SideBar from './SideBar';
import styles from './MusicPlayer.module.css'

const MusicPlayer = () => {
  return (
    <div className="main-container flex space-around">
        <SideBar />
        <div className="audio-container flex flex-column space-between">
            <div className={`thumbnail-container flex align-end justify-center auto google italic`}>
                <p className={`${styles.pantherText} muted`}>PANTHER</p>
                <img src="/pinkpantheress.jpeg" className={styles.thumbnailImageSize}></img>
            </div>
            <div className="controls-container">

            </div>
        </div>
    </div>
  );
}

export default MusicPlayer;