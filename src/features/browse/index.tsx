import React from "react";
import WhoIsWatching from "./sections/WhoIsWatching/WhoIsWatching";
import RoleGrid from "./sections/Profile/ProfileDisplay";
import styles from "./index.module.css";
const BrowseConatiner = () => {
  return (
    <main className={styles.container}>
      <WhoIsWatching />
      <RoleGrid />
    </main>
  );
};

export default BrowseConatiner;
