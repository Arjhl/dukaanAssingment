import Styles from "../styles/TransactionList.module.css";

const data = {
  id: "#281209",
  date: "7 July,2023",
  amount: "₹1,278.23",
  fee: "₹22",
};

const dataArray: any[] = [];
for (let i = 0; i < 18; i++) {
  dataArray.push(data);
}

const TransactionList = () => {
  return (
    <div>
      {dataArray.map((data, i) => {
        return (
          <div key={i} className={Styles.listParent}>
            <p className={Styles.firstChild}>{data.id}</p>
            <p className={Styles.secondChild}>{data.date}</p>
            <p className={Styles.thirdChild}> {data.amount}</p>
            <p className={Styles.fourthChild}>{data.fee}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;
