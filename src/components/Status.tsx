import Styles from "../styles/Status.module.css";
import Card from "./Card";
import DropdownArrow from "../assets/dropdownArrow/icons/arrow.svg";
import TransactionCard from "./TransactionCard";

const CardContent = [
  {
    title: "Online orders",
    content: "231",
  },
  {
    title: "Amount Received",
    content: "₹23,92,312.19",
  },
];

const Status = () => {
  return (
    <div className={Styles.container}>
      <div>
        <div className={Styles.headContainer}>
          <h1 className={Styles.heading}>Overview</h1>
          <div className={Styles.dropdown}>
            Last Month <img src={DropdownArrow} />{" "}
          </div>
        </div>

        <div className={Styles.cardParent}>
          {CardContent.map((CardContent, i) => {
            return <Card {...CardContent} key={i} />;
          })}
        </div>
      </div>
      <div className={Styles.transactionParent}>
        <h1 className={Styles.heading}>Transactions | This Month</h1>
        <TransactionCard />
      </div>
    </div>
  );
};

export default Status;
