import React from 'react'
import styles from "./MillisecondCounter.module.css"

type Props = {
    milliSeconds: string
}

const MillisecondCounter = ({milliSeconds}: Props) => {
  return (
    <p className={`remove-margin google ${styles.small} ${styles.milliMargins}`}>{milliSeconds}</p>
  )
}

export default MillisecondCounter