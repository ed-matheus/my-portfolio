const Button = ({ text }) => {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-300 hover:cursor-pointer px-5 py-2 rounded flex items-center gap-2"
    >
      {text}
    </button>
  );
};

export default Button;
