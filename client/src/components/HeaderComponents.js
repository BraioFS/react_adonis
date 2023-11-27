import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../pages/general.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to do not appear in specific routes
  const shouldShowHeader = () => {
    const pathsToHideHeader = ['/'];
    return !pathsToHideHeader.includes(location.pathname);
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

  const handleHomeButtonClick = () => {
    navigate('/');
  };

  const handleLoginButtonClick = () => {
    navigate('/login');
  };

  return shouldShowHeader() ? (
    <div className='header'>
      <div>
        <button onClick={handleBackButtonClick}>
          Voltar
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Pesquise algo..."
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </div>
      <div>
        <button onClick={handleHomeButtonClick}>
          Home
        </button>
        <button onClick={handleLoginButtonClick}>
          Login
        </button>
      </div>
    </div>
  ) : null;
};

export default Header;
