import Styles from "../styles/Card.module.css";

type propTypes = {
  title: String;
  content: String;
};

const Card = (Props: propTypes) => {
  return (
    <div className={Styles.cardContainer}>
      <h1>{Props.title}</h1>
      <p>{Props.content}</p>
    </div>
  );
};

export default Card;
