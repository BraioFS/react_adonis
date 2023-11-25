import { useState } from "react";
import back from "../../assets/images/csharp.png";
import tsAzul from "../../assets/images/ts_icon.png";
import tsBranco from "../../assets/images/ts_branco.png";
import mobile from "../../assets/images/android_icon.png";
import design from "../../assets/images/ux.png";
import banco from "../../assets/images/banco_icon.png";
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
              initialImageSource={tsBranco}
              hoverImageSource={tsAzul}
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
              initialImageSource={back}
              hoverImageSource={tsAzul}
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
              initialImageSource={mobile}
              hoverImageSource={tsAzul}
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
              initialImageSource={banco}
              hoverImageSource={tsAzul}
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
              initialImageSource={design}
              hoverImageSource={tsAzul}
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
