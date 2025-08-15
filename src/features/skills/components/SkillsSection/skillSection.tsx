import React from "react";
import styles from "./styles.module.css";
import TechCard from "../Card/techCard";
import { SkillSetsProps } from "../../types/skills/skillsSetTypes";

const SkillSection: React.FC<SkillSetsProps> = ({ title, skillCard }) => {
  return (
    <div className={styles.skillsSection}>
      <h1 className={styles.skillTitle}>{title}</h1>
      <div className={styles.skillsList}>
        {skillCard.map((data, index) => (
          <TechCard
            key={index}
            icon={data.icon}
            name={data.name}
            context={data.context}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
