import React from 'react'
import styles from'./ProductDesign.module.css'
function ProductDesign() {
  return (
    
    <div className={styles.courseCard}>
      <img src="/Images/studentdashboard/Intro Video.png" alt="Course Thumbnail" />
      <div className={styles.courseInfo}>
        <h2>Getting Started in Product Design</h2>
        <button className={styles.continueModule}>Continue Module</button>
      </div>
    </div>
  );
}


export default ProductDesign