const Card = ({ title, children }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md border-2 border-primary">
      <h2 className="text-xl font-bold text-primary mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
