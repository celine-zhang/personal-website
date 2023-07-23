import ProjectData from "./ProjectData";
import "./ProjectStyle.css";
import proYelp from "../assets/yelp.jpeg";
import proKattie from "../assets/kattie.jpeg";
import proTodo from "../assets/todolist.jpeg";

function Project() {
  return (
    <div className="project" id="projects">
      <h1 className="title-text">Project</h1>

      <div className="projectCard">
        <ProjectData
          heading="YelpCamp"
          image={proYelp}
          text="Implemented CRUD features"
          weburl="https://yelpcamp2023-7ujq.onrender.com"
          githuburl="https://github.com/celine-zhang/WebDeveloper-YelpCamp"
        />
        <ProjectData
          heading="Kattie"
          image={proKattie}
          text="Implemented CRUD features"
          weburl="https://kattiecatmmunity.netlify.app/"
          githuburl="https://github.com/celine-zhang/Kattie-Catmmunity"
        />
        <ProjectData
          heading="Todo List"
          image={proTodo}
          text="Implemented CRUD features"
          weburl="https://todolist0381.netlify.app/"
          githuburl="https://github.com/celine-zhang/WebDeveloper-todolist"
        />
      </div>
    </div>
  );
}

export default Project;
