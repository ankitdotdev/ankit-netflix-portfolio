import Image from "next/image";
import React from "react";
import styles from "./project.module.css";
import { FiExternalLink } from "react-icons/fi";

export interface ProjectProps {
  image: string;
  title: string;
  context: string;
  techStacks: string[];
  liveLink?: string; // optional live link
}

const ProjectCard: React.FC<ProjectProps> = ({
  image,
  title,
  context,
  techStacks,
  liveLink,
}) => {
  return (
    <div className={styles.projectCard}>
      {/* Image Section */}
      <div className={styles.imageWrapper}>
        <Image
          className={styles.projectImage}
          src={image}
          alt={title}
          fill
          priority
        />
      </div>

      <div className={styles.projectInfo}>
        <p className={styles.projectTitle}>{title}</p>
        <p className={styles.projectContext}>{context}</p>

        <ul className={styles.projectTechStacks}>
          {techStacks.map((data, idx) => (
            <li className={styles.projectItem} key={idx}>
              {data}
            </li>
          ))}
        </ul>
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveLinkButton}
          >
            Live Preview <FiExternalLink className={styles.linkIcon} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
