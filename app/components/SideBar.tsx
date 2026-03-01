import React from 'react'
import styles from './SideBar.module.css'

const data = [
    {
        station: 'Panther',
        number: '101.1',
        liked: true
    },
    {
        station: '',
        number: '101.1',
        liked: true
    },
    {
        station: '',
        number: '101.1',
        liked: true
    },
    {
        station: '',
        number: '101.1',
        liked: true
    }
]

const SideBar = () => {
  return (
    <div className="main-container">
        <div className="sideBar-container overflow-hidden position-relative">
            <div className="flex justify-center align-center">
                <h1 className={styles.marginRight}>ON AIR</h1>
                <img src="/radio-signal-light.svg" className={styles.imgSidebar}/>
            </div>
            <img src="/earth.png" className={styles.earthPosition}/>
        </div>
    </div>
  )
}

export default SideBar