import Styles from "../styles/Filter.module.css";
import searchIcon from "../assets/searchicon/Dashboard/icons/assets/icons/global/search.svg";
import sortIcon from "../assets/sort/Button/Outlined/Sort.svg";
import downloadIcon from "../assets/download/icons/download.svg";

const Filter = () => {
  return (
    <div className={Styles.filterBox}>
      <div className={Styles.filterSearch}>
        <img src={searchIcon} alt="" />
        <input type="text" placeholder="Search by order ID..." />
      </div>
      <div className={Styles.secondChild}>
        <div className={Styles.sortCard}>
          <p>Sort</p>
          <img src={sortIcon} alt="" />
        </div>
        <div className={Styles.download}>
          <img src={downloadIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
