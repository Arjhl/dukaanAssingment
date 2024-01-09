import Styles from "../styles/Pagination.module.css";
import previousArrow from "../assets/leftarrow/Outlined/Chevron Right.svg";
import nextArrow from "../assets/rightarrow/Outlined/Chevron Right.svg";

const pages = [
  "1",
  "...",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
];

const Pagination = () => {
  return (
    <div className={Styles.paginationParent}>
      <div className={Styles.pageBtn}>
        <img src={previousArrow} alt="" />
        <p>Previous</p>
      </div>

      <div className={Styles.pagenum}>
        {pages.map((page, i) => {
          return (
            <div
              key={i}
              className={page == "10" ? Styles.active : Styles.element}
            >
              <p>{page}</p>
            </div>
          );
        })}
      </div>

      <div className={Styles.pageBtn}>
        <p>Next</p>
        <img src={nextArrow} alt="" />
      </div>
    </div>
  );
};

export default Pagination;
