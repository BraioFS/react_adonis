import { useState } from "react";
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

  return (
    <div style={{ backgroundColor: bodyColor }}>
      <div className="container">
        <div className="grid">
          <div
            className="col-12 box"
            onMouseEnter={() => setBodyColor("var(--blue)")}
            onMouseLeave={() => setBodyColor("var(--white-light)")}
          >
            <LinkComponent
              initialImageSource={frontInitial}
              hoverImageSource={frontHover}
              altText="front"
              title="Front-end"
              to="/front"
              hoverFontColor="var(--blue)"
              initialBackgroundColor="var(--blue)"
            />
          </div>

          <div
            className="col-12 box"
            onMouseEnter={() => setBodyColor("var(--black-light)")}
            onMouseLeave={() => setBodyColor("var(--white-light)")}
          >
            <LinkComponent
              initialImageSource={backHover}
              hoverImageSource={backInitial}
              altText="front"
              title="Back-end"
              to="/front"
              hoverFontColor="var(--black-light)"
              initialBackgroundColor="var(--black-light)"
            />
          </div>

          <div
            className="col-12 box"
            onMouseEnter={() => setBodyColor("var(--green)")}
            onMouseLeave={() => setBodyColor("var(--white-light)")}
          >
            <LinkComponent
              initialImageSource={mobileInital}
              hoverImageSource={mobileHover}
              altText="front"
              title="Mobile"
              to="/front"
              hoverFontColor="var(--green)"
              initialBackgroundColor="var(--green)"
            />
          </div>

          <div
            className="col-12 box"
            onMouseEnter={() => setBodyColor("var(--gray-dark)")}
            onMouseLeave={() => setBodyColor("var(--white-light)")}
          >
            <LinkComponent
              initialImageSource={databaseInitial}
              hoverImageSource={databaseHover}
              altText="front"
              title="Banco de dados"
              to="/front"
              hoverFontColor="var(--gray-dark)"
              initialBackgroundColor="var(--gray-dark)"
            />
          </div>

          <div
            className="col-12 box"
            onMouseEnter={() => setBodyColor("var(--purple)")}
            onMouseLeave={() => setBodyColor("var(--white-light)")}
          >
            <LinkComponent
              initialImageSource={designInitial}
              hoverImageSource={designHover}
              altText="front"
              title="Design"
              to="/front"
              hoverFontColor="var(--purple)"
              initialBackgroundColor="var(--purple)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
