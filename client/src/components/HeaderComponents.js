import { useLocation } from "react-router-dom";
import "../pages/general.scss";
import { ButtonComponent } from "./ButtonComponents";


const Header = () => {
  const location = useLocation();

  // Function to do not appear in specific routes
  const shouldShowHeader = () => {
    const pathsToHideHeader = ["/"];
    return !pathsToHideHeader.includes(location.pathname);
  };

  const [BackButton, HomeButton, LoginButton] = ButtonComponent();
  const back = <BackButton />;
  const home = <HomeButton />;
  const login = <LoginButton />;

  return shouldShowHeader() ? (
    <div className="header">
      <div>
      {back}
      </div>
      <div>
        <input
          type="text"
          placeholder="Pesquise algo..."
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
      <div>
        {home}
        {login}
      </div>
    </div>
  ) : null;
};

export default Header;
