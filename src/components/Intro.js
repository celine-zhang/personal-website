import "./IntroStyle.css";
import PersonalImg from "../assets/introImg.jpeg";
import DownloadResumeButton from "./DownloadResumeButton";
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
        <div className="intro-text">
          <div className="description">
            Currently seeking for a 2024 Summer Intern as a Web Developer.
            Looking forward to positions as Front-end Developer or Back-end
            Developer.
          </div>
          <div className="location">Location: Boston MA</div>

          <div className="email">
            <i className="fa-regular fa-envelope"></i>
            <a href="mailto:zhang.xinli@northeastern.edu">
              zhang.xinli@northeastern.edu
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
        </div>
        <DownloadResumeButton />
      </div>
    </div>
  );
}

export default Intro;
