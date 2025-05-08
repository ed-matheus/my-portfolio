import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ text, icon, style }) => {
  return (
    <button
      type="button"
      className="bg-green-500 hover:bg-green-400 hover:cursor-pointer px-5 py-2 rounded flex items-center gap-2"
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
