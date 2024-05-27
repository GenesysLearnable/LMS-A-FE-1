import styles from "./ProductDesign.module.css"
import Button from "../Landingpage/Button"
function ProductDesign() {
  return (
    <div className={styles.courseCard}>
      <img
        src="/Images/studentdashboard/Intro Video.png"
        alt="Course Thumbnail"
      />
      <div className={styles.courseInfo}>
        <h2>Getting Started in Product Design</h2>
        <Button
          title={"Start Module"}
          bg={"bg-[#ff9053] hover:bg-[#ff5722]"}
          w={"w-[160px]"}
          h={"h-10"}
          path={"/students/courses"}
        />
        {/* <button className={styles.continueModule}>Continue Module</button> */}
      </div>
    </div>
  )
}

export default ProductDesign
