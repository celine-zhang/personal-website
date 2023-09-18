import "./ProjectStyle.css";

function ProjectData(props) {
  return (
    <div className="m-card">
      <div className="m-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p className="m-text">{props.text}</p>
      <div className="m-href">
        <a
          href={props.weburl}
          class="btn btn-sm projectButton"
          role="button"
          aria-pressed="true"
        >
          <i class="fa-solid fa-link"></i>Live Demo
        </a>
        <a
          href={props.githuburl}
          class="btn btn-sm projectButton"
          role="button"
          aria-pressed="true"
        >
          <i class="fa-brands fa-github"></i> Code
        </a>
      </div>
    </div>
  );
}

export default ProjectData;
