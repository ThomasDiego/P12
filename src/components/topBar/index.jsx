import "./style.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <div className="topBar">
      <Link to={"/"}>
        <div>
          <img src={Logo} alt="" />
        </div>
      </Link>
      <Link to={""}>
        <div>Accueil</div>
      </Link>
      <Link to={""}>
        <div>Profil</div>
      </Link>
      <Link to={""}>
        <div>Réglage</div>
      </Link>
      <Link to={""}>
        <div>Communauté</div>
      </Link>
    </div>
  );
};

export default TopBar;
