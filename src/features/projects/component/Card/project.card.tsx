import Image from "next/image";
import React from "react";

export interface ProjectProps {
  image: string;
  title: string;
  context: string;
  techStacks: string[];
}

import styles from "./project.module.css";

const ProjectCard: React.FC<ProjectProps> = ({
  image,
  title,
  context,
  techStacks,
}) => {
  return (
    <div className={styles.projectCard}>
      {/* Image Section */}
      <Image
        className={styles.projectImage}
        src={image}
        alt={title}
        height={50}
        width={100}
      />
      <div className={styles.projectInfo}>
        <p className={styles.projectTitle}>{title}</p>
        <p className={styles.projectContext}>{context}</p>

        <div className={styles.projectTechStacks}>
          {techStacks.map((data, idx) => (
            <li className={styles.projectItem} key={idx}>
              {data}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
