import React from "react";
import { projects } from "./constants/project.constants";
import ProjectCard from "./component/Card/project.card";
import styles from "./index.module.css";
const ProjectsContainer = () => {
  return (
    <div className={styles.projectContainer}>
      {projects.map((project, idx) => (
        <ProjectCard {...project} key={idx} />
      ))}
    </div>
  );
};

export default ProjectsContainer;
