import ClipLoader from "react-spinners/ClipLoader"

const override = {
  display: "block",
  margin: "100px auto",
  position: "absolute",
  top: "30%",
  left: "48%",
}

const Spinners = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={80}
    />
  )
}

export default Spinners
