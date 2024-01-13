import { useState } from "react";
import "../pages/general.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const SidebarComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div
      className={`sidebar ${isSidebarOpen ? "open" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ícone esquerdo (fechado) */}
      {!isSidebarOpen && (
        <div className="icon-left">
          <FaAngleLeft size={20} />
        </div>
      )}

      {/* Conteúdo da Sidebar aqui */}

      {/* Ícone direito (aberto) */}
      {isSidebarOpen && (
        <div className="icon-right">
          <FaAngleRight size={20} />
        </div>
      )}
    </div>
  );
};

export default SidebarComponent;
