import React from "react";
import styles from "./index.module.css";
import SkillSection from "./components/SkillsSection/skillSection";
import {
  baas,
  backend,
  cloudDevOps,
  databases,
  deployment,
  frontend,
  languages,
  stateManagement,
  systemDesign,
  tools,
} from "./constants/skills/skillsetData";

const SkillContainer = () => {
  return (
<div className={styles.skillsContainer}>
  {/* 1. Core Programming Languages */}
  <SkillSection {...languages} />

  {/* 2. Frontend Development */}
  <SkillSection {...frontend} />
  <SkillSection {...stateManagement} />

  {/* 3. Backend & API Development */}
  <SkillSection {...backend} />

  {/* 4. Databases & ORMs */}
  <SkillSection {...databases} />

  {/* 5. Cloud & DevOps */}
  <SkillSection {...cloudDevOps} />

  {/* 6. Backend as a Service */}
  <SkillSection {...baas} />

  {/* 7. System Design */}
  <SkillSection {...systemDesign} />

  {/* 8. Developer Tools */}
  <SkillSection {...tools} />

  {/* 9. Deployment */}
  <SkillSection {...deployment} />
</div>

  );
};

export default SkillContainer;
