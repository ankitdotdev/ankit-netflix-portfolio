import React, { ReactNode } from "react";
import styles from "./card.module.css";

interface TechCardProps {
  icon: ReactNode;
  name: string;
  context: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon, name, context }) => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.imageWrapper}>
        <span>{icon}</span>
      </div>
      <h3>{name}</h3>
      <p className={styles.context}>{context}</p>
    </div>
  );
};

export default TechCard;
