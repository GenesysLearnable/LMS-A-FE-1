import { SpinnerInfinity } from "spinners-react";

const Spinners = ({ enabled }) => {
  return (
    <SpinnerInfinity
      enabled={enabled}
      color="#f37c3b"
      size={70}
      thickness={120}
    />
  );
};

export default Spinners;
