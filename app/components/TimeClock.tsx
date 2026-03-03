import React, { useEffect, useState } from "react";
import styles from "./TimeClock.module.css";

function getDayOfWeek(d: Date) {
  return d.toLocaleString("en-US", { weekday: "short" }).toUpperCase();
}

function getTimeParts(d: Date) {
  const hhmm = d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const ss = String(d.getSeconds()).padStart(2, "0");
  return { hhmm, ss };
}

type Props = {
  tickMs?: number;
};

const TimeClock = ({ tickMs = 1000 }: Props) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), tickMs);
    return () => clearInterval(id);
  }, [tickMs]);

  const day = getDayOfWeek(now);
  const { hhmm, ss } = getTimeParts(now);

  return (
    <div className="flex align-end center-self">
      <h2 className={`remove-margin google no-bold ${styles.marginLeft}`}>{`${day} ${hhmm}`}</h2>
      <p className={`remove-margin google ${styles.small} ${styles.marginRight} ${styles.secondsMargins}`}>
        {ss}
      </p>
    </div>
  );
};

export default TimeClock;