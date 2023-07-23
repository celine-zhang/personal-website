import "./SkillStyle.css";
import { SkillsData } from "./SkillsData";
function Skills() {
  return (
    <div className="skills container" id="skills">
      <h1 className="title-text">Skills</h1>

      <div className="al-grid">
        {SkillsData.map((item, index) => {
          return (
            <div className="grid-item">
              {" "}
              <i className={item.cName}></i>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
