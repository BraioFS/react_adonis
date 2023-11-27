import { useState } from "react";
import { Link } from "react-router-dom";

const CardComponent = ({
  initialImageSource,
  altText,
  title,
  to,
  fontColor,
  hoverImageSource,
}) => {
  const [imageSource, setImageSource] = useState(initialImageSource);

  return (
    <div
      className="col-12 box"
      onMouseEnter={() => {
        setImageSource(hoverImageSource);
      }}
      onMouseLeave={() => {
        setImageSource(initialImageSource);
      }}
      style={{ backgroundColor: "var(--white-light)" }}
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

export default CardComponent;