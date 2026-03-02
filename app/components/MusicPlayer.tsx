import React from 'react'
import SideBar from './SideBar';
import styles from './MusicPlayer.module.css'

function getTime() {
    let count=0;
    const currentDate = new Date();
    let date = currentDate.toLocaleTimeString();
    const timeOfDay = date.split(" ")[1];
    let milliSeconds;

    for (let i=0; i<=date.length; i++) {
        if (date[i] === ":") {
            count++;
            if (count === 2) {
                milliSeconds = date.slice(i+1, i+3);
                date = date.slice(0, i);
                break;
            }
        }
    }
    return [`${date}`, `${milliSeconds}`];
}

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

function getDayOfWeek() {
    const currentDate = new Date();
    return currentDate.toLocaleString('en-US', {weekday: 'short',}).toUpperCase();
}

const MusicPlayer = () => {
  return (
    <div className="main-container flex space-around">
        <SideBar />
        <div className="audio-container flex flex-column space-between">
            <div className={`flex space-evenly align-end gap ${styles.headerContainer}`}>
                <h2 className='remove-margin google no-bold center-self'>{getDay()}</h2>
                <h1 className={`remove-margin ${styles.titleText} google italic no-bold`}>NOW PLAYING</h1>
                <div className={`flex align-end center-self`}>
                    <h2 className={`remove-margin google no-bold`}>{`${getDayOfWeek()} ${getTime()[0]}`}</h2>
                    <p className={`remove-margin google ${styles.small} ${styles.milliMargins}`}>{`${getTime()[1]}`}</p>
                </div>
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