const CardBody = ({ name, description }) => {
  const nameWithAllCapitalLetters = name.toUpperCase();
  return (
    <div style={{ height: 200 }}>
      <h1>{nameWithAllCapitalLetters}</h1>
      <p>{description}</p>
    </div>
  );
};

export default CardBody;
