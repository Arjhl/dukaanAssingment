import Styles from "../styles/Menu.module.css";

type propTypes = {
  imgSrc: string;
  title: string;
};

const Menu = (Props: propTypes) => {
  return (
    <div
      className={Props.title == "Payments" ? Styles.activeMenu : Styles.menu}
    >
      <div className={Styles.menuImg}>
        <img src={Props.imgSrc} alt="" />
      </div>
      <h1 className={Styles.menuTitle}>{Props.title}</h1>
    </div>
  );
};

export default Menu;
