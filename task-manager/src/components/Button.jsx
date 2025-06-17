const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base = "px-4 py-2 font-semibold text-white transition duration-300";
  const styles = {
    primary: "bg-primary hover:bg-pink-500",
    secondary: "bg-secondary hover:bg-pink-400",
    danger: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

