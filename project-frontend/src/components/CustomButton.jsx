const CustomButton = ({ name, textColor }) => {
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

export default CustomButton;
