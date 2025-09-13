import "../assets/css/veterinarianheader.css";
import Furever from "../assets/images/Furever_Care-removebg.png";
import { useNavigate } from "react-router-dom";

const VeterinarianHeader = () => {
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
        <a href="#">Dashboard</a>
        <a href="#">Appointments</a>
        <a href="#">Schedule</a>
        <a href="#">Reports</a>
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

export default VeterinarianHeader;
