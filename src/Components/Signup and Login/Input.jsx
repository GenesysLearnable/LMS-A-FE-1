// import PropTypes from "prop-types"
const Input = ({ type, placeholder, value, setValue, onChange, name }) => {
  return (
    <input
      name={name}
      className="px-4 h-12 border-[1px] border-[#79747e] rounded-md w-[416px] focus:outline-[#ff9053]"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

// Input.PropTypes = {
//   type: PropTypes.string,
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   setValue: PropTypes.func
// }
