import Styles from "../styles/Navbaricons.module.css";

type proptypes = {
  imgSrc: string;
};

const Navbaricons = (Props: proptypes) => {
  return (
    <div className={Styles.icons}>
      <img src={Props.imgSrc} alt="" />
    </div>
  );
};
export default Navbaricons;
