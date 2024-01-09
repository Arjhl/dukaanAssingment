import profileImage from "../assets/Image.png";
import arrowDown from "../assets/Vector.svg";
import Styles from "../styles/Sidebar.module.css";
import Menu from "./Menu";
import Credits from "./Credits";
import HomeImg from "../assets/home/Navbar/Vector.svg";
import OrderImg from "../assets/orders/Navbar/Vector.svg";
import ProductImg from "../assets/products/Navbar/Vector.png";
import DeliveryImg from "../assets/delivery/Navbar/Vector.png";
import MarketingImg from "../assets/marketing/Navbar/Navbar Icon.svg";
import AnalyticsImg from "../assets/analytics/Navbar/Vector.png";
import PaymentImg from "../assets/payments/Navbar/Vector.png";
import ToolsImg from "../assets/tools/Navbar/Vector.png";
import DiscountImg from "../assets/discounts/Navbar/Vector.png";
import AudienceImg from "../assets/audience/Navbar/Vector.png";
import AppreanceImg from "../assets/appearance/Navbar/Vector.svg";
import PluginImg from "../assets/plugins/Navbar/Vector.svg";

const MenuItems = [
  {
    title: "Home",
    imgSrc: HomeImg,
  },
  {
    title: "Orders",
    imgSrc: OrderImg,
  },
  {
    title: "Products",
    imgSrc: ProductImg,
  },
  {
    title: "Delivery",
    imgSrc: DeliveryImg,
  },
  {
    title: "Marketing",
    imgSrc: MarketingImg,
  },
  {
    title: "Analytics",
    imgSrc: AnalyticsImg,
  },
  {
    title: "Payments",
    imgSrc: PaymentImg,
  },
  {
    title: "Tools",
    imgSrc: ToolsImg,
  },
  {
    title: "Discounts",
    imgSrc: DiscountImg,
  },
  {
    title: "Audience",
    imgSrc: AudienceImg,
  },
  {
    title: "Appearance",
    imgSrc: AppreanceImg,
  },
  {
    title: "Plugins",
    imgSrc: PluginImg,
  },
];
const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.profile}>
        <img src={profileImage} alt="" className={Styles.profileImage} />
        <div className={Styles.profileDetails}>
          <h1>Nishyan</h1>
          <a href="">Visit Store</a>
        </div>
        <img src={arrowDown} alt="Svg" className={Styles.arrowDown} />
      </div>
      <div className={Styles.menuBar}>
        {MenuItems.map((menuItem, i) => (
          <Menu title={menuItem.title} imgSrc={menuItem.imgSrc} key={i} />
        ))}
      </div>
      <div>
        <Credits />
      </div>
    </div>
  );
};

export default Sidebar;
