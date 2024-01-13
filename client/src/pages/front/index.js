import { useState, useEffect } from "react";
import frontHover from "../../assets/images/ts_icon.png";
import frontInitial from "../../assets/images/ts_branco.png";

import "../general.scss";
import CardComponent from "../../components/CardComponents";

export default function Front() {
  const colorBlue = "var(--blue)";
  const colorBlack = "var(--black-light)";
  const colorGreen = "var(--green)";
  const colorGray = "var(--gray-dark)";
  const colorPurple = "var(--purple)";

  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:3333/find-content-by-id/1"
        );
        if (!response.ok) {
          throw new Error("Não foi possível obter os dados");
        }
        const data = await response.json();
        setContentData(data);
      } catch (error) {
        console.error("Erro ao obter dados:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundColor: colorBlue,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container">
        <div className="grid">
          <div className="col-12 box">
            <CardComponent
              initialImageSource={frontInitial}
              hoverImageSource={frontHover}
              altText="html"
              title="Html"
              to="/page-html"
              fontColor={colorBlack}
            />
          </div>
          <div className="col-12 box">
            <CardComponent
              initialImageSource={frontInitial}
              hoverImageSource={frontHover}
              altText="css"
              title="Css"
              to="/css-page"
              fontColor={colorGreen}
            />
          </div>
          <div className="col-12 box">
            <CardComponent
              initialImageSource={frontInitial}
              hoverImageSource={frontHover}
              altText="typescript"
              title="Typescript"
              to="/typescript-page"
              fontColor={colorGray}
            />
          </div>
          <div className="col-12 box">
            <CardComponent
              initialImageSource={frontInitial}
              hoverImageSource={frontHover}
              altText="javascript"
              title="Javascript"
              to="/javascript-page"
              fontColor={colorPurple}
            />
          </div>
          <div className="col-12 box">
            <CardComponent
              initialImageSource={frontInitial}
              hoverImageSource={frontHover}
              altText="react"
              title="React"
              to="/react-page"
              fontColor={colorBlue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
