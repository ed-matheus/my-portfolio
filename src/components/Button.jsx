import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ text }) => {
  return (
    <button
      type="button"
      className="bg-cyan hover:bg-cyan-h text-light hover:cursor-pointer px-5 py-2 rounded flex items-center gap-2"
    >
      <span className="text-sm md:text-md lg:text-[1rem]">{text}</span>
    </button>
  );
};

export default Button;
