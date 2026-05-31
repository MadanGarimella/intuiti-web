const Button = ({
  children,
  className = "",
}) => {
  return (
    <button
      className={`
        px-6 py-3
        rounded-xl
        bg-[#FF1E1E]
        hover:bg-red-600
        transition-all
        duration-300
        font-medium
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;