import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML-CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "C#",
    level: "advanced",
    color: "red"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "green"
  },
  {
    skill: "React",
    level: "Beginner",
    color: "yellow"
  },
  {
    skill: "Angular",
    level: "Intermediate",
    color: "orange"
  },
  {
    skill: "VB.Net",
    level: "advanced",
    color: "purple"
  },
  {
    skill: "SQL",
    level: "advanced",
    color: "#a85232"
  },
  {
    skill: "ASP.Net",
    level: "advanced",
    color: "#a9fc03"
  },
  {
    skill: "Xamarin",
    level: "Intermediate",
    color: "#5a03fc"
  },
  {
    skill: "Flutter-Dart",
    level: "Intermediate",
    color: "#616161"
  },
  {
    skill: "Node.JS",
    level: "advanced",
    color: "#ECEFF1"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar
        imageLocation="https://plus.unsplash.com/premium_photo-1676389763792-4519eaf7c4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=90"
        imageLabel="My Avatar"
      />
      <div className="data">
        <Intro name="Jude Valerius" bio="I'm a coder and learner" />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="avatar" src={props.imageLocation} alt={props.imageLabel} />
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skillItem) => (
        <Skill key={skillItem.skill} skillObject={skillItem} />
      ))}
    </div>
  );
}

function Skill(props) {
  const { skill, color, level } = props.skillObject;

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" ? "💪🏾" : level === "Intermediate" ? "👍🏾" : "👶🏾"}
        {/*{level.toLowerCase() === "advanced" && "💪🏾"}
          {level.toLowerCase() === "intermediate" && "👍🏾"}
          {level.toLowerCase() === "beginner" && "👶🏾"}
        */}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
