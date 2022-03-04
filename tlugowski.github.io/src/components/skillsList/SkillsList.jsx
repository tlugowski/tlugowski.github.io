import "./skillsList.css";
import Js from "../../img/js.png";
import React from "../../img/react.png";
import TypeScript from "../../img/ts.png";
import HTML5 from "../../img/html-5.png";
import Css from "../../img/css.png";
import CssModules from "../../img/css-modules.png";
import Sc from "../../img/sc.jpg";
import Ant from "../../img/ant-design.png";
import Mui from "../../img/mui.png";
import Csharp from "../../img/csharp.png";
import Git from "../../img/git.png";
import Postgresql from "../../img/postgresql.png";
import Sellenium from "../../img/sellenium.jpg";
import Appium from "../../img/appium.png";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="mySkills">
        <h1>My Skills:</h1>
      </div>
      <div className="skills-picture-container">
        <div className="react-icon-skills">
          <img src={React} alt="react icon" width="50" height="50" />
          <span className="tooltip">React</span>
        </div>
        <div className="js-icon-skills">
          <img src={Js} alt="java script icon" width="50" height="50" />
          <span className="tooltip">Java Script</span>
        </div>
        <div className="typeScript-icon-skills">
          <img src={TypeScript} alt="type-script icon" width="50" height="50" />
          <span className="tooltip">Type Script</span>
        </div>
        <div className="csharp-icon-skills">
          <img src={Csharp} alt="c-sharp icon" width="50" height="50" />
          <span className="tooltip">C#</span>
        </div>
        <div className="git-icon-skills">
          <img src={Git} alt="git icon" width="50" height="50" />
          <span className="tooltip">Git</span>
        </div>
        <div className="postgresql-icon-skills">
          <img
            src={Postgresql}
            alt="postgresql icon"
            width="50"
            height="50px"
          />
          <span className="tooltip">Postgrsql</span>
        </div>
        <div className="html5-icon-skills">
          <img src={HTML5} alt="html5 icon" width="50" height="50" />
          <span className="tooltip">HTML5</span>
        </div>
        <div className="css-icon-skills">
          <img src={Css} alt="css icon" width="50" height="50" />
          <span className="tooltip">CSS3</span>
        </div>
        <div className="css-modules-icon-skills">
          <img src={CssModules} alt="css modules icon" width="50" height="50" />
          <span className="tooltip">CSS Modules</span>
        </div>
        <div className="styled-components-icon-skills">
          <img src={Sc} alt="styled-components icon" width="50" height="50" />
          <span className="tooltip">Styled components</span>
        </div>
        <div className="ant-design-icon-skills">
          <img src={Ant} alt="ant-design icon" width="50" height="50" />
          <span className="tooltip">Ant design</span>
        </div>
        <div className="material-ui-icon-skills">
          <img src={Mui} alt="material-ui-design icon" width="50" height="50" />
          <span className="tooltip">Material UI</span>
        </div>
        <div className="sellenium-icon-skills">
          <img src={Sellenium} alt="sellenium icon" width="50" height="50" />
          <span className="tooltip">Sellenium</span>
        </div>
        <div className="appium-icon-skills">
          <img src={Appium} alt="appium icon" width="90" height="50" />
          <span className="tooltip">Appium</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
