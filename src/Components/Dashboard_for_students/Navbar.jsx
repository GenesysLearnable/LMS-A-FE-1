import React from 'react'
import styles from './Navbar.module.css'
import { FaRegBell } from "react-icons/fa6";
function Navbar() {
  return (
    <div className={styles.Navbar}>
    <div className={styles.searchbox}>
     <span>Search</span> 
    </div>
    <div className={styles.userSection}>
     
      <img className={styles.studentPhoto} src="/public/Images/studentdashboard/Ellipse 1037.png" alt="Student" />
      </div>
      </div>
  );
}

export default Navbar