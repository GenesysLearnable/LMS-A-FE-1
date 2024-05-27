import React, { useContext } from "react"
import styles from "./Navbar.module.css"
import { FaRegBell, FaUserAstronaut } from "react-icons/fa6"
import { FaSearch } from "react-icons/fa"
import Button from "../Landingpage/Button"

function Navbar() {
  return (
    <div className={`${styles.navbarDashboard} py-6`}>
      <div className={styles.rightContainer}>
        <div className="icon">
          <FaRegBell />
        </div>
        <div className={styles.smallPicture}>
          {/* <img
            src="/Images/studentdashboard/Ellipse 1037.png"
            alt="Profile Picture"
          /> */}
          <div className="bg-[#ff9053] p-2 rounded-full ">
            <FaUserAstronaut className="text-white size-4" />
          </div>
        </div>
        <Button
          title={"Connect Wallet"}
          bg={"bg-[#ff9053] hover:bg-[#ff5722]"}
          w={"w-[150px]"}
          h={"h-9"}

          path={"/students/web3"}
        />
        {/* <button className={styles.connectWallet}>Connect Wallet</button> */}
      </div>
    </div>
  )
}

export default Navbar
