import React from "react";
import styles from "./Activity.module.css";

function Activity() {
  return (
    <div className={styles.activityGraph}>
      <div className={styles.activity}>
        <h3>Activity</h3>
        <p>Total session</p>
      </div>
      <div className={styles.imgHour}>
        <div className={styles.timeBar}>
          <p>24hr</p>
          <p>20hr</p>
          <p>16hr</p>
          <p>12hr</p>
          <p>8hr</p>
        </div>

        <img
          className={styles.imageBar}
          src="/Images/studentdashboard/Vector 1.png"
          alt=""
        />
      </div>
      <div className={styles.dayBar}>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thur</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
}

export default Activity;
