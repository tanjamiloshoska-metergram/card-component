import CardButton from "../CardButton/CardButton";
import styles from "./Card.module.css";

const Card = ({ cardTitle, cardDescription, buttonName, color, logo }) => {
  return (
    <div className={styles.cardWrapper} style={{ backgroundColor: color }}>
      <img src={logo} alt={cardTitle} />
      <h1 className={styles.cardTitle}>{cardTitle.toUpperCase()}</h1>
      <p className={styles.cardDescription}>{cardDescription}</p>
      <CardButton textColor={color}>{buttonName}</CardButton>
    </div>
  );
};

export default Card;
