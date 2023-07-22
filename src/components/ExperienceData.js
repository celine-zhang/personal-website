import "./ExperienceStyle.css";

function ExperienceData(props) {
  return (
    <div className="experience-card">
      <div className="company-info">
        <strong className="company-name">{props.companyName}</strong>
        <em className="company-location">{props.companyLocation}</em>
      </div>
      <div className="job-info">
        <strong className="job-position">{props.jobPosition}</strong>
        <em className="job-duration">{props.jobDuration}</em>
      </div>

      <ul className="job-description">
        {props.jobDescription.map((decription, index) => {
          return <li key={index}>{decription}</li>;
        })}
      </ul>
    </div>
  );
}

export default ExperienceData;
