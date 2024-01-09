import Styles from "../styles/Header.module.css";
import SearchBar from "./SearchBar";
import infoImage from "../assets/info/Dashboard/Outlined/Vector.svg";
import speakerImage from "../assets/speaker/Dashboard/Icons/Menu.svg";
import polygonImage from "../assets/polygon/Dashboard/Icons/Menu.svg";
import Navbaricons from "./Navbaricons";

const icons = [speakerImage, polygonImage];

const Header = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.subhead}>
        <h1>Payments</h1>
        <div className={Styles.info}>
          <img src={infoImage} alt="" />
          <p>How it Works</p>
        </div>
      </div>

      <SearchBar />
      <div className={Styles.navIcons}>
        {icons.map((icon, i) => (
          <Navbaricons imgSrc={icon} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Header;
