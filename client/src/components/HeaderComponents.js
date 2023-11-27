import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../pages/general.scss";
import { ButtonComponent } from "./ButtonComponents";
import Mark from "mark.js";

const Header = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  // Função para determinar se o cabeçalho deve ser exibido em rotas específicas
  const shouldShowHeader = () => {
    const pathsToHideHeader = ["/"];
    return !pathsToHideHeader.includes(location.pathname);
  };

  const [BackButton, HomeButton, LoginButton] = ButtonComponent();
  const back = <BackButton />;
  const home = <HomeButton />;
  const login = <LoginButton />;

  // Função para lidar com a mudança no valor do input de pesquisa
  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    searchOnPage(newSearchTerm); // Chama searchOnPage diretamente com o novo termo
  };

  const searchOnPage = (term) => {
    const bodyText = document.body.innerText.toLowerCase();
    const searchTermLowerCase = term.toLowerCase();

    if (bodyText.includes(searchTermLowerCase)) {
      const instance = new Mark(document.body);

      instance.unmark(); // Limpa marcações anteriores

      instance.mark(searchTermLowerCase, {
        ignoreJoiners: true,
        separateWordSearch: false,
      });
    } else {
      console.error("Termo não encontrado na página.");
    }
  };

  return shouldShowHeader() ? (
    <div className="header">
      <div>{back}</div>
      <div>
        <input
          type="text"
          placeholder="Pesquise algo..."
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
          value={searchTerm}
          onChange={handleSearchChange}
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
