import "./EducationStyle.css";

function Education() {
  return (
    <div className="education" id="education">
      <h1 className="title-text">Education</h1>
      <div className="education-timeline">
        <div className="education-item" data-year="2023-2025">
          <h4>Northeastern University</h4>
          <h5>Boston, MA</h5>
          <p>MS in Information Systems</p>
        </div>

        <div className="education-item" data-year="2019-2021">
          <h4>Columbia University</h4>
          <h5>New York, NY</h5>
          <p>MA in Statistics</p>
        </div>

        <div className="education-item" data-year="2015-2019">
          <h4>Ocean Univ. of China</h4>
          <h5>Qingdao, China</h5>
          <p>BS in Mathematics</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
