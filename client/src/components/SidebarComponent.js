import { useState } from "react";
import "../pages/general.scss";
import { FaAngleLeft, FaEllipsisVertical } from "react-icons/fa6";

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
      {isSidebarOpen ? (
        <div>
          {" "}
          <FaAngleLeft size={20}/>
        </div>
      ) : (
        <div>
          <FaEllipsisVertical size={20} />
        </div>
      )}
    </div>
  );
};

export default SidebarComponent;
