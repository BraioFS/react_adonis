import { useNavigate } from "react-router-dom";
import { FaAngleLeft,FaHouse, FaUserGraduate } from "react-icons/fa6";
import { Tooltip } from "react-tippy";
import "react-toastify/dist/ReactToastify.css";
import "../pages/general.scss";

export const ButtonComponent = () => {
  const navigate = useNavigate();
  const positionbottom = "bottom";
  const triggerEnter = "mouseenter";

  const handleBackButtonClick = () => {
    window.history.back();
  };

  const handleHomeButtonClick = () => {
    navigate("/");
  };

  const handleLoginButtonClick = () => {
    navigate("/login");
  };

  const BackButton = () => (
    <Tooltip title="Voltar" position={positionbottom} trigger={triggerEnter}>
      <button onClick={handleBackButtonClick}>
        <FaAngleLeft size={20} className="icon" />{" "}
      </button>
    </Tooltip>
  );

  const HomeButton = () => (
    <Tooltip title="Home" position={positionbottom} trigger={triggerEnter}>
      <button onClick={handleHomeButtonClick}>
        <FaHouse size={20} className="icon" />{" "}
      </button>
    </Tooltip>
  );

  const LoginButton = () => (
    <Tooltip title="Login" position={positionbottom} trigger={triggerEnter}>
      <button onClick={handleLoginButtonClick}>
        <FaUserGraduate size={20} className="icon" />{" "}
      </button>
    </Tooltip>
  );

  return [BackButton, HomeButton, LoginButton];
};
