import { useState } from "react";
/*Logos*/
import frontHover from "../../assets/images/ts_icon.png";
import frontInitial from "../../assets/images/ts_branco.png";
import backHover from "../../assets/images/java_white.png";
import backInitial from "../../assets/images/java_dark.png";
import mobileHover from "../../assets/images/flutter.png";
import mobileInital from "../../assets/images/flutter_dark.png";
import designHover from "../../assets/images/figma.png";
import designInitial from "../../assets/images/figma_dark.png";
import databaseHover from "../../assets/images/sqlite.png";
import databaseInitial from "../../assets/images/sqlite_dark.png";

import "../general.scss";
import LinkComponent from "../../components/LinkComponents";

export default function Home() {
  const [bodyColor, setBodyColor] = useState("var(--white-light)");

  const handleMouseEnter = (color, image) => {
    setBodyColor(color);
  };

  const handleMouseLeave = () => {
    setBodyColor("var(--white-light)");
  };

  const colorBlue = "var(--blue)";
  const colorBlack = "var(--black-light)";
  const colorGreen = "var(--green)";
  const colorGray = "var(--gray-dark)";
  const colorPurple = "var(--purple)";

  return (
    <div
      style={{
        backgroundColor: bodyColor,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container">
        <div className="grid">
          <div
            className="col-12 box"
            onMouseEnter={() => handleMouseEnter(colorBlue)}
            onMouseLeave={handleMouseLeave}
          >
            <LinkComponent
              initialImageSource={frontInitial}
              hoverImageSource={frontHover}
              altText="front"
              title="Front-end"
              to="/front-home"
              hoverFontColor={colorBlue}
              initialBackgroundColor={colorBlue}
            />
          </div>

          <div
            className="col-12 box"
            onMouseEnter={() => handleMouseEnter(colorBlack)}
            onMouseLeave={handleMouseLeave}
          >
            <LinkComponent
              initialImageSource={backHover}
              hoverImageSource={backInitial}
              altText="back"
              title="Back-end"
              to="/back-home"
              hoverFontColor={colorBlack}
              initialBackgroundColor={colorBlack}
            />
          </div>

          <div
            className="col-12 box"
            onMouseEnter={() => handleMouseEnter(colorGreen)}
            onMouseLeave={handleMouseLeave}
          >
            <LinkComponent
              initialImageSource={mobileInital}
              hoverImageSource={mobileHover}
              altText="mobile"
              title="Mobile"
              to="/mobile-home"
              hoverFontColor={colorGreen}
              initialBackgroundColor={colorGreen}
            />
          </div>

          <div
            className="col-12 box"
            onMouseEnter={() => handleMouseEnter(colorGray)}
            onMouseLeave={handleMouseLeave}
          >
            <LinkComponent
              initialImageSource={databaseInitial}
              hoverImageSource={databaseHover}
              altText="database"
              title="Banco de dados"
              to="/database-home"
              hoverFontColor={colorGray}
              initialBackgroundColor={colorGray}
            />
          </div>

          <div
            className="col-12 box"
            onMouseEnter={() => handleMouseEnter(colorPurple)}
            onMouseLeave={handleMouseLeave}
          >
            <LinkComponent
              initialImageSource={designInitial}
              hoverImageSource={designHover}
              altText="design"
              title="Design"
              to="/design-home"
              hoverFontColor={colorPurple}
              initialBackgroundColor={colorPurple}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
