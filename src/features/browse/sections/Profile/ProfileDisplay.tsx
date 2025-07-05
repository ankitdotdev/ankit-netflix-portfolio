"use client"
import React from "react";
import styles from "./ProfileDisplay.module.css";
import RoleCard from "../../components/ProfileCard/ProfileCard";
import { ProfilseData } from "../../constants/Roles/ProfilesConstant";
const Profiles = () => {
  return (
    <div>
      <ul className={styles.grid}>
        {ProfilseData.map((value, index) => (
          <li key={index}>
            <RoleCard {...value} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profiles;
