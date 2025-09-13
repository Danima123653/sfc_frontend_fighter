import Furever from "../assets/images/Furever_Care-removebg.png";
import "../assets/css/petheader.css";
import { useNavigate } from "react-router-dom";

const AnimalHeader = () => {
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName") || "User";

  const handleSwitchUser = () => {
    navigate("/");
  };

  return (
    <header className="pet-header">
      <div className="pet-header__logo-title">
        <img
          src={Furever}
          alt="Furever Care Logo"
          className="pet-header__logo"
        />
        <span className="pet-header__title">Furever Care</span>
      </div>
      <nav className="pet-header__nav">
        <a href="#">Gallery</a>
        <a href="#">Success Stories</a>
        <a href="#">Events</a>
        <a href="#">Shelter </a>
        <a href="#">Contact</a>
      </nav>
      <div className="pet-header__user">
        <span>
          Welcome, <span className="pet-header__username">{userName}</span>!
        </span>
        <button className="pet-header__switch-btn" onClick={handleSwitchUser}>
          <span role="img" aria-label="switch user">
            👥
          </span>{" "}
          Switch User
        </button>
      </div>
    </header>
  );
};

export default AnimalHeader;
