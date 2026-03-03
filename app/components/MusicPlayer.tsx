import React from 'react'
import SideBar from './SideBar';
import styles from './MusicPlayer.module.css'
import TimeClock from './TimeClock';

function getDay() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleString('en-US', {weekday: 'short',});
    const monthAbbrev = currentDate.getMonth() + 1;
    const dayNumber = currentDate.getDate();
    const year = currentDate.getFullYear();
    let day = "";
    let month = "";

    if (dayNumber < 10) {
        day = `0${dayNumber}`;
    }

    if (monthAbbrev <= 10) {
        month = `0${monthAbbrev}`;
    }

    if (month != "" && day != "") {
        return `${day}.${month}.${year}`;
    }

    if (month != "") {
        return `${dayNumber}.${month}.${year}`;
    }

    if (day != "") {
        return `${day}.${monthAbbrev}.${year}`;
    }

    return `${dayNumber}.${monthAbbrev}.${year}`;
}

const MusicPlayer = () => {
  return (
    <div className="main-container flex space-around">
        <SideBar />
        <div className="audio-container flex flex-column space-between">
            <div className={`flex justify-center align-end gap ${styles.headerContainer}`}>
                <h2 className='remove-margin google no-bold center-self text-center'>{getDay()}</h2>
                <h1 className={`remove-margin ${styles.titleText} google italic no-bold flex1`}>NOW PLAYING</h1>
                <TimeClock />
            </div>
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