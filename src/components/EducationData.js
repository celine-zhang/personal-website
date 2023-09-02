function EducationData(props) {
  return (
    <div className="education-card card">
      <div className="education-info">
        <strong className="education-name">{props.name}</strong>
        <em className="education-time">{props.time}</em>
        <em className="education-location">{props.location}</em>
        <em className="education-major">{props.major}</em>
      </div>
    </div>
  );
}

export default EducationData;
