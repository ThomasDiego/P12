import "./style.css";
import YogaIcon from "../../assets/yoga.svg";
import PiscineIcon from "../../assets/nage.svg";
import VeloIcon from "../../assets/velo.svg";
import MusculationIcon from "../../assets/musculation.svg";
import { Link } from "react-router-dom";
const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="element"></div>
      <div className="menuList">
        <Link
          to={"#"}
          className="itemMenu"
          style={{ backgroundImage: `url(${YogaIcon})` }}
        ></Link>
        <Link
          to={"#"}
          className="itemMenu"
          style={{ backgroundImage: `url(${PiscineIcon})` }}
        ></Link>
        <Link
          to={"#"}
          className="itemMenu"
          style={{ backgroundImage: `url(${VeloIcon})` }}
        ></Link>
        <Link
          to={"#"}
          className="itemMenu"
          style={{ backgroundImage: `url(${MusculationIcon})` }}
        ></Link>
      </div>
      <div className="copyright">Copiryght, SportSee 2020</div>
    </div>
  );
};

export default LeftBar;
