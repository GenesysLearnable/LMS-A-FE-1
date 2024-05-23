import React from 'react';
import styles from './EnrolledCourseCard.module.css';

function EnrolledCourseCard({ cardTitle, number, enrolled }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h6>{cardTitle} </h6>
        {enrolled ? (
<<<<<<< HEAD
          <img
            src="/Images/studentdashboard/Frame 1000002498.png"
            alt=""
          />
=======
          <img src="/Images/studentdashboard/Frame 1000002498.png" alt="" />
>>>>>>> a1dee8febaa8ca1e8ad4b3c92bf5498a799aa520
        ) : (
          <img src="/Images/studentdashboard/Frame 1000002498 2.png" alt="" />
        )}
      </div>
      <span>{number}</span>
    </div>
  );
}

export default EnrolledCourseCard;
