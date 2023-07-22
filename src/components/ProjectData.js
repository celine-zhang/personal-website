import "./ProjectStyle.css";

function ProjectData(props) {
  return (
    <div className="m-card">
      <div className="m-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <div className="m-href">
        <a
          href={props.weburl}
          class="btn btn-primary btn-sm active"
          role="button"
          aria-pressed="true"
        >
          View Website
        </a>
        <a
          href={props.githuburl}
          class="btn btn-primary btn-sm active"
          role="button"
          aria-pressed="true"
        >
          View Github
        </a>
      </div>
    </div>
  );
}

export default ProjectData;
