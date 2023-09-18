import "./ProTitleStyle.css";
import headImg from "../assets/head.jpeg";
import Intro from "./Intro";
import Experience from "./Experience";
import Project from "./Project";
import Skills from "./Skills";
import Education from "./Education";
function ProTitle() {
  return (
    <div className="body">
      <div className="heading">
        <div>
          <img src={headImg} alt="new york" className="headingImg" />
        </div>
        <Intro />
        {/* <Experience /> */}
        <Project />
        <Skills />
        {/* <Education /> */}
      </div>
    </div>
  );
}
export default ProTitle;
