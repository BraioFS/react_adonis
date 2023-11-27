import { useState } from "react";
import { Link } from "react-router-dom";

const LinkComponent = ({
  initialImageSource,
  altText,
  title,
  to,
  hoverFontColor,
  hoverImageSource,
  initialBackgroundColor,
}) => {
  const [imageSource, setImageSource] = useState(initialImageSource);
  const [fontColor, setFontColor] = useState("var(--white)");

  return (
    <div
      className="col-12 box"
      onMouseEnter={() => {
        setImageSource(hoverImageSource);
        setFontColor(hoverFontColor);
      }}
      onMouseLeave={() => {
        setImageSource(initialImageSource);
        setFontColor("var(--white)");
      }}
      style={{ backgroundColor: initialBackgroundColor }}
    >
      <Link to={to} className="invisible-link">
        <div className="col-12">
          <img src={imageSource} alt={altText} className="card-img-top" />
        </div>
        <div className="col-12">
          <h3
            style={{ color: fontColor, fontWeight: "bolder", marginTop: "0" }}
          >
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default LinkComponent;