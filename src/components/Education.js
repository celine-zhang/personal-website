import "./EducationStyle.css";
import EducationData from "./EducationData";

function Education() {
  return (
    <div className="education" id="education">
      <h1 className="title-text">Education</h1>
      <div className="education-item">
        {/* <div className="education-timeline">
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
      </div> */}
      </div>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4 mb-3">
          <div class="col">
            <div class="card h-80">
              <div class="card-body">
                <div>
                  <h5 class="card-title">Northeastern University</h5>
                  <p class="card-text m-0">Aug 2023 - May 2025 </p>
                  <p class="card-text m-0">Boston, MA</p>
                  <p class="card-text">Information Systems</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-80">
              <div class="card-body">
                <h5 class="card-title">Columbia University</h5>
                <p class="card-text m-0">Sept 2019 - Feb 2021</p>
                <p class="card-text m-0">New York, NY</p>
                <p class="card-text">Statistics</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-80">
              <div class="card-body">
                <h5 class="card-title">Ocean University of China</h5>
                <p class="card-text m-0">Sept 2015 - Jun 2019</p>
                <p class="card-text m-0">Qingdao, China</p>
                <p class="card-text">Mathematics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
