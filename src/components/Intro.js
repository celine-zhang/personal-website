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
            Experienced Data Scientist with a proven track record in driving
            business growth through data-driven insights. Expertise in customer
            segmentation, data analysis, and marketing campaign execution,
            resulting in a monthly revenue increase of 100M. Led
            cross-functional projects, applying strong collaboration skills to
            automate processes and optimize team efficiency. Committed to
            adaptability and driven problem-solving. Complemented by technical
            projects showcasing software engineering capabilities. Currently
            seeking for a 2024 Summer Intern as a Software Engineer to leverage
            analytical expertise and passion for technology..
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

          <div className="phone">
            <i class="fa-solid fa-phone"></i>
            <a href="#">(781) 350-6528</a>
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
