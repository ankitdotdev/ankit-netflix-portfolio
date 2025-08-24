import React from "react";
import styles from "./index.module.css";
import { experiences } from "./constants/experienceData";
import {FaStar } from "react-icons/fa6";

const WorkExperienceContainer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        📅 Work Experience & Education Timeline
      </h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            {/* Icon Marker */}
            <div className={styles.iconWrapper}>{exp.icon}</div>

            {/* Date outside the card (desktop/tablet only) */}
            {exp.date && <p className={styles.dateOutside}>{exp.date}</p>}

            {/* Content */}
            <div className={styles.content}>
              <h3 className={styles.title}>{exp.title}</h3>

              {/* Date inside content (mobile only) - after title */}
              {exp.date && <p className={styles.dateInside}>{exp.date}</p>}

              <p className={styles.subtitle}>{exp.subtitle}</p>
              <ul className={styles.description}>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className={`${styles.timelineItem} ${styles.center}`}>
          <div className={`${styles.iconWrapper} ${styles.gameIcon}`}>
            <FaStar  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceContainer;
