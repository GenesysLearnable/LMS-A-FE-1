import React from "react";
import styles from "./Navbar.module.css";
import { FaRegBell } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
function Navbar() {
  return (
    <div className={styles.navbarDashboard}>
      <div className={styles.rightContainer}>
        <div className="icon">
          <FaRegBell />
        </div>
        <div className={styles.smallPicture}>
          <img
            src="/Images/studentdashboard/Ellipse 1037.png"
            alt="Profile Picture"
          />
        </div>
        <button className={styles.connectWallet}>Connect Wallet</button>
      </div>
    </div>
  );
}

export default Navbar;
