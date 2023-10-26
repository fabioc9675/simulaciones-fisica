import React from "react";
import { FaGithubSquare, FaYoutubeSquare } from "react-icons/fa";
import "../styles/MainInfo.css";

import description from "../textFiles/description.json";

export default function MainInfo() {
  const logo = "resources/logos/UdeA.png";
  //console.log(description.text);
  return (
    <div className="MainInfo-pane">
      <div className="MainInfo-Title">{description.title}</div>
      <div className="MainInfo-Body">{description.text}</div>
      <div className="MainInfo-Logo">
        <a
          className="grey-text text-lighten-4 right"
          href="https://www.udea.edu.co"
          target="_blank"
          rel="noreferrer"
        >
          <img width="200px" src={logo} alt="" />
        </a>
      </div>
      <div className="MainInfo-Repo">
        <a
          className="grey-text text-lighten-4"
          href="https://github.com/fabioc9675/PhysicsSimulators.git"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare className="MainInfo-Icon" size="3em" />
        </a>
        <a
          className="grey-text text-lighten-4"
          href="https://www.youtube.com/watch?v=V2eaKFyslGQ&list=PLR3dpncZPGe8qDBX-vzmo5AVLnSAygJdQ&index=21&t=2s"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutubeSquare className="MainInfo-Icon" size="3em" />
        </a>
      </div>
    </div>
  );
}
