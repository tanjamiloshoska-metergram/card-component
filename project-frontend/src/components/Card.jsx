import CardButton from "./CardButton";
import "../styles/CardStyle.css";

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
      <h1>{cardName.toUpperCase()}</h1>
      <p>{cardDescription}</p>
      <CardButton name={buttonName} textColor={color} />
    </div>
  );
};

export default Card;
