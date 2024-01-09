import SearchIcon from "../assets/searchicon/Dashboard/icons/assets/icons/global/search.svg";
import Styles from "../styles/Searchbar.module.css";

const SearchBar = () => {
  return (
    <div className={Styles.searchBar}>
      <img src={SearchIcon} alt="" />
      <input type="text" placeholder="Search features,tutorials,etc." />
    </div>
  );
};

export default SearchBar;
