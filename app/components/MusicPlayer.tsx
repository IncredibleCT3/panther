import React from 'react'
import SideBar from './SideBar';
import styles from './MusicPlayer.module.css'

function getTime() {
    let count=0;
    const currentDate = new Date();
    let date = currentDate.toLocaleTimeString();
    const timeOfDay = date.split(" ")[1];

    for (let i=0; i<=date.length; i++) {
        if (date[i] === ":") {
            count++;
            if (count === 2) {
                date = date.slice(0, i);
                break;
            }
        }
    }

    return `${date} ${timeOfDay}`
}

const MusicPlayer = () => {
  return (
    <div className="main-container flex space-around">
        <SideBar />
        <div className="audio-container flex flex-column space-between">
            <h2 className='remove-margin google no-bold'>{getTime()}</h2>
            <h1 className={`remove-margin ${styles.titleText} google italic no-bold`}>NOW PLAYING</h1>
            <h2></h2>
            <div className={`thumbnail-container flex align-end justify-center auto google italic`}>
                <p className={`${styles.pantherText} muted`}>PANTHER</p>
                <img src="/pinkpantheress.jpeg" className={`${styles.thumbnailImageSize}`}></img>
            </div>
            <div className="controls-container">

            </div>
        </div>
    </div>
  );
}

export default MusicPlayer;