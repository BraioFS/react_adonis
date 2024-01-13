import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../pages/general.scss";
import { ButtonComponent } from "./ButtonComponents";
import Mark from "mark.js";

const Header = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  // Function to do not appear in specifcs routes
  const shouldShowHeader = () => {
    const pathsToHideHeader = ["/"];
    return !pathsToHideHeader.includes(location.pathname);
  };

  const handleClearClick = () => {
    setSearchTerm("");
    const instance = new Mark(document.body);
    instance.unmark();
  };

  const [BackButton, HomeButton, LoginButton, ClearButton, SearchButton] = ButtonComponent();
  const back = <BackButton />;
  const home = <HomeButton />;
  const login = <LoginButton />;

  // Fucntion to search
  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    searchOnPage(newSearchTerm);
  };

  const searchOnPage = (term) => {
    const bodyText = document.body.innerText.toLowerCase();
    const searchTermLowerCase = term.toLowerCase();

    if (bodyText.includes(searchTermLowerCase)) {
      const instance = new Mark(document.body);

      instance.unmark();

      instance.mark(searchTermLowerCase, {
        ignoreJoiners: true,
        separateWordSearch: false,
      });
    }
  };

  return shouldShowHeader() ? (
    <div className="header">
      <div>{back}</div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Pesquise algo..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div>
          {searchTerm ? (
            <ClearButton onClick={handleClearClick} />
          ) : (
            <SearchButton />
          )}
        </div>
      </div>
      <div>
        {home}
        {login}
      </div>
    </div>
  ) : null;
  
};

export default Header;
