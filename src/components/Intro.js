import "./IntroStyle.css";
import PersonalImg from "../assets/resume.jpeg";
import DownloadResumeButton from "./DownloadResumeButton";
import { Divider } from "@mui/material";
function Intro() {
  return (
    <div className="intro-container">
      <div>
        <h1 className="title-text">About Me</h1>
      </div>
      <div className="intro-detail">
        <div className="profile-image-container">
          <img className="profile-image" src={PersonalImg} alt="img" />
        </div>
        <div className="intro-text" id="contact">
          <div className="description">
            Currently seeking for a 2024 Summer Intern as a Web Developer.
            Looking forward to positions as Front-end Developer or Back-end
            Developer.
          </div>
          <div className="location">
            <i class="fa-solid fa-location-dot"></i> Boston, MA
          </div>

          <div className="email">
            <i className="fa-regular fa-envelope"></i>
            <a href="mailto:xinlin.zhang@columbia.edu">
              xinlin.zhang@columbia.edu
            </a>
          </div>

          <div className="github">
            <i class="fa-brands fa-github"></i>
            <a href="https://github.com/celine-zhang">
              https://github.com/celine-zhang
            </a>
          </div>

          <div className="linkedin">
            <i class="fa-brands fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/xz715/">
              https://www.linkedin.com/in/xz715/
            </a>
          </div>
          <div>
            <DownloadResumeButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
