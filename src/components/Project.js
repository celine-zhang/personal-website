import ProjectData from "./ProjectData";
import "./ProjectStyle.css";
import proYelp from "../assets/yelp.jpeg";
import proKattie from "../assets/kattie.jpeg";
import proTodo from "../assets/todolist.jpeg";
import proHangOut from "../assets/HangOut.png";

function Project() {
  return (
    <div className="project" id="projects">
      <h1 className="title-text">Project</h1>

      <div className="projectCard">
        <ProjectData
          heading="YelpCamp"
          image={proYelp}
          text="It's a website for users to share their campsites. Implemented CRUD function on data"
          weburl="https://yelpcamp2023-7ujq.onrender.com"
          githuburl="https://github.com/celine-zhang/WebDeveloper-YelpCamp"
        />
        <ProjectData
          heading="Kattie"
          image={proKattie}
          text="It's a web application with a responsive layout for users to publish post of cats."
          weburl="https://kattiecatmmunity.netlify.app/"
          githuburl="https://github.com/celine-zhang/Kattie-Catmmunity"
        />
        <ProjectData
          heading="Todo List"
          image={proTodo}
          text="It's a todo list web app to support users to record their daily todos"
          weburl="https://todolist0381.netlify.app/"
          githuburl="https://github.com/celine-zhang/WebDeveloper-todolist"
        />
        <ProjectData
          heading="HangOut"
          image={proHangOut}
          text="It's a social media web app where users can publish post and comments and manage their relationship list"
          weburl="https://hangoutnow.netlify.app/"
          githuburl="https://github.com/celine-zhang/hangOutApp"
        />
      </div>
    </div>
  );
}

export default Project;
