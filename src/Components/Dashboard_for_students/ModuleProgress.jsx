import React from 'react'
import styles from'./ModuleProgress.module.css'
function ModuleProgress() {
  return (
    <div className={styles.ModuleProgress}>
      <div className={styles.ModuleP}>
        <h3>Module Progress</h3>
        <span className={styles.viewAll}>View All</span>
      </div>
<div className={styles.nameProgress}>
<p>Name</p>
<p>Progress</p>
<p>Duration</p>
</div>
    </div>
  );
}

export default ModuleProgress

