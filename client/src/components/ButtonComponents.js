import { useNavigate } from "react-router-dom";
import {
  FaAngleLeft,
  FaHouse,
  FaUserGraduate,
  FaXmark,
  FaMagnifyingGlass,
} from "react-icons/fa6";
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
    <Tooltip position={positionbottom} trigger={triggerEnter}>
      <button onClick={handleBackButtonClick}>
        <FaAngleLeft size={20} />{" "}
      </button>
    </Tooltip>
  );

  const HomeButton = () => (
    <Tooltip  position={positionbottom} trigger={triggerEnter}>
      <button onClick={handleHomeButtonClick}>
        <FaHouse size={20} />{" "}
      </button>
    </Tooltip>
  );

  const LoginButton = () => (
    <Tooltip position={positionbottom} trigger={triggerEnter}>
      <button onClick={handleLoginButtonClick}>
        <FaUserGraduate size={20} />{" "}
      </button>
    </Tooltip>
  );

  const ClearButton = ({ onClick }) => (
    <FaXmark size={20} className="search-icon" onClick={onClick} />
  );

  const SearchButton = () => (
    <FaMagnifyingGlass size={20} className="search-icon" />
  );

  return [BackButton, HomeButton, LoginButton, ClearButton, SearchButton];
};
