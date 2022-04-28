import CardBody from "./CardBody";
import CustomButton from "./CustomButton";

const Card = ({ cardName, cardDescription, buttonName, color, logo }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: 35,
        width: 200,
        height: 350,
        borderRadius: 5,
      }}
    >
      <img src={logo} alt={cardName} />
      <CardBody name={cardName} description={cardDescription} />
      <br />
      <br />
      <CustomButton name={buttonName} textColor={color} />
    </div>
  );
};

export default Card;
