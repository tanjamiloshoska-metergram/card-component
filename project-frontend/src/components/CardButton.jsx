const CardButton = ({ name, textColor }) => {
  return (
    <button
      className="btn"
      style={{
        color: textColor,
      }}
    >
      {name}
    </button>
  );
};

export default CardButton;
