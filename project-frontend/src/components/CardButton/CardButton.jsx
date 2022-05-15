import styles from "./CardButton.module.css";

const CardButton = ({ children, textColor }) => {
  return (
    <button className={styles.cardButton} style={{ color: textColor }}>
      {children}
    </button>
  );
};

export default CardButton;
