import Styles from "../styles/TransactionCard.module.css";
import Filter from "./Filter";
import polygon from "../assets/polygon/Dashboard/Icons/Polygon 2.svg";
import feeinfo from "../assets/feeinfo/Outlined/Vector.svg";
import TransactionList from "./TransactionList";
import Pagination from "./Pagination";

const TransactionCard = () => {
  return (
    <div className={Styles.card}>
      <Filter />
      <div className={Styles.transactionHeader}>
        <div>Order ID</div>
        <div>
          Order date <img src={polygon} alt="" />
        </div>
        <div className={Styles.flexEnd}>Order amount</div>
        <div className={Styles.flexEnd}>
          Transaction fees
          <img src={feeinfo} alt="" className={Styles.feeinfoIcon} />
        </div>
      </div>

      <div>
        <TransactionList />
      </div>
      <Pagination />
    </div>
  );
};

export default TransactionCard;
