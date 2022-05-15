import Card from "./components/Card/Card";
import luxuryLogo from "./assets/icon-luxury.svg";
import sedanLogo from "./assets/icon-sedans.svg";
import suvLogo from "./assets/icon-suvs.svg";
import "./App.css";

const cards = [
  {
    id: 0,
    cardTitle: "Sedans",
    cardDescription:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for crusing in the city or on your next road trip.",
    color: "#E38826",
    logo: sedanLogo,
  },
  {
    id: 1,
    cardTitle: "Suvs",
    cardDescription:
      "Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures",
    color: "#006970",
    logo: suvLogo,
  },
  {
    id: 3,
    cardTitle: "Luxury",
    cardDescription:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    color: "#004241",
    logo: luxuryLogo,
  },
];

function App() {
  const mapCards = () => {
    return cards.map((card) => (
      <Card
        key={card.id}
        color={card.color}
        buttonName={"Learn More"}
        cardDescription={card.cardDescription}
        cardTitle={card.cardTitle}
        logo={card.logo}
      />
    ));
  };

  return <div className="flexbox-container">{mapCards()}</div>;
}

export default App;
