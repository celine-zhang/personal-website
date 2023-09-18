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
          heading="YelpCamp⛺️"
          image={proYelp}
          text="YelpCamp is an online platform where users can share information about campsites and post their camping experiences."
          weburl="https://yelpcamp2023-7ujq.onrender.com"
          githuburl="https://github.com/celine-zhang/WebDeveloper-YelpCamp"
        />
        <ProjectData
          heading="HangOut🧑‍🤝‍🧑"
          image={proHangOut}
          text="HangOut is a social media web app where users can publish post and comments and manage their relationship list"
          weburl="https://hangoutnow.netlify.app/"
          githuburl="https://github.com/celine-zhang/hangOutApp"
        />
        <ProjectData
          heading="Kattie🐱"
          image={proKattie}
          text="It's a web platform where cat loves can share pictures of their beloved furry felines and access various cat-related services."
          weburl="https://kattiecatmmunity.netlify.app/"
          githuburl="https://github.com/celine-zhang/Kattie-Catmmunity"
        />
        {/* <ProjectData
          heading="Todo List"
          image={proTodo}
          text="It's a todo list web app to support users to record their daily todos"
          weburl="https://todolist0381.netlify.app/"
          githuburl="https://github.com/celine-zhang/WebDeveloper-todolist"
        /> */}
      </div>
    </div>
  );
}

export default Project;
