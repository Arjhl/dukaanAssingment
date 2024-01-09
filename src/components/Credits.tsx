import walletImg from "../assets/wallet/Navbar/outline/wallet.svg";
import Styles from "../styles/Credits.module.css";

const Credits = () => {
  return (
    <div className={Styles.cover}>
      <div className={Styles.Credits}>
        <div className={Styles.walletImg}>
          <img src={walletImg} alt="" />
        </div>
        <div className={Styles.creditsDetails}>
          <p className={Styles.title}>Available Credits</p>
          <p className={Styles.amount}>222.10</p>
        </div>
      </div>
    </div>
  );
};

export default Credits;
