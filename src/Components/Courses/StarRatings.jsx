const StarRating = ({ size = 15.89 }) => {
  return (
    <>
      <img
        src="/Images/Courses/Stars.svg"
        alt="Star ratings"
        style={{
          width: size + "px",
          height: size + "px",
        }}
      />
    </>
  );
};

export default StarRating;
