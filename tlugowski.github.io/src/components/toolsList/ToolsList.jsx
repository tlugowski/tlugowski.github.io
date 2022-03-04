import "./toolsList.css";
import Vs from "../../img/vs.png";
import VsCode from "../../img/vs-code.png";
import Figma from "../../img/figma.png";
import Photoshop from "../../img/ps.jpg";
import Powershell from "../../img/powershell.png";
import Postman from "../../img/postman.png";
import JMeter from "../../img/JMeter.svg";

const ToolsList = () => {
  return (
    <div className="tools-container">
      <div className="toolsList">
        <h1>Tools:</h1>
      </div>
      <div className="tools-picture-container">
        <div className="vs-icon-tools">
          <img src={Vs} alt="visual studio icon" width="50" height="50" />
          <span className="tooltip">Visual Studio</span>
        </div>
        <div className="vs-code-icon-tools">
          <img
            src={VsCode}
            alt="visual studio code icon"
            width="50"
            height="50"
          />
          <span className="tooltip">Visual Studio Code</span>
        </div>
        <div className="figma-icon-tools">
          <img src={Figma} alt="figma icon" width="50" height="50" />
          <span className="tooltip">Figma</span>
        </div>
        <div className="photoshop-icon-tools">
          <img src={Photoshop} alt="photoshop icon" width="50" height="50" />
          <span className="tooltip">Photoshop</span>
        </div>
        <div className="photoshop-icon-tools">
          <img src={Powershell} alt="powershell icon" width="50" height="50" />
          <span className="tooltip">Powershell</span>
        </div>
        <div className="postman-icon-tools">
          <img src={Postman} alt="postaman icon" width="50" height="50" />
          <span className="tooltip">Postman</span>
        </div>
        <div className="jmeter-icon-tools">
          <img src={JMeter} alt="jmeter icon" width="50" height="50" />
          <span className="tooltip">JMeter</span>
        </div>
      </div>
    </div>
  );
};

export default ToolsList;
