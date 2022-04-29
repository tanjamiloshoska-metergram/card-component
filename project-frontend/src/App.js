import Card from "./components/Card";
import "./styles/App.css";
import luxuryLogo from "./images/icon-luxury.svg";
import sedanLogo from "./images/icon-sedans.svg";
import suvLogo from "./images/icon-suvs.svg";

const cards = [
  {
    id: 0,
    cardName: "Sedans",
    cardDescription:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for crusing in the city or on your next road trip.",
    color: "#E38826",
    logo: sedanLogo,
  },
  {
    id: 1,
    cardName: "Suvs",
    cardDescription:
      "Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures",
    color: "#006970",
    logo: suvLogo,
  },
  {
    id: 3,
    cardName: "Luxury",
    cardDescription:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    color: "#004241",
    logo: luxuryLogo,
  },
];

function App() {
  const cardPrewiew = cards.map((card) => (
    <Card
      key={card.id}
      color={card.color}
      buttonName={"Learn More"}
      cardDescription={card.cardDescription}
      cardName={card.cardName}
      logo={card.logo}
    />
  ));

  return <div className="flexbox-container">{cardPrewiew}</div>;
}

export default App;
