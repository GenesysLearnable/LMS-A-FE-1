import React from "react";
import styles from './CoursesDashbord.module.css';

function CoursesDashboard({courseContent,courseTime}) {
  return (
    <div className={styles.coursesDashboard}>
      <div className={styles.play}>
        <img src="/Images/studentdashboard/play-circle.png" alt="" />
        <h4>{courseContent}</h4>
      </div>
      
      <div className={styles.progressBar}>
        <h6>0% Complete </h6>
        <div className={styles.greyBar}></div>
      </div>
    
      <span>{courseTime} </span>
    </div>
   
  );
}

export default CoursesDashboard;
