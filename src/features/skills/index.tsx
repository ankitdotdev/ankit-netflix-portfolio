import React from "react";
import styles from "./index.module.css";
import SkillSection from "./components/SkillsSection/skillSection";
import {
  backend,
  deployment,
  frontend,
  languages,
  stateManagement,
  tools,
} from "./constants/skills/skillsetData";

const SkillContainer = () => {
  return (
    <div className={styles.skillsContainer}>
      {/* 1. Core programming languages */}
      <SkillSection {...languages} />

      {/* 2. Frontend technologies */}
      <SkillSection {...frontend} />
      <SkillSection {...stateManagement} />

      {/* 3. Backend technologies */}
      <SkillSection {...backend} />

      {/* 4. Databases & data storage */}
      <SkillSection {...tools} />

      {/* 5. Development tools (version control, editors, testing) */}
      <SkillSection {...deployment} />
    </div>
  );
};

export default SkillContainer;
