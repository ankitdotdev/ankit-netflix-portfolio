"use client";

import React, { useEffect } from "react";
import HeroBanner from "./sections/HeroBanner/HeroBanner";
import MainProfile from "./constants/MainProfileData";
import { useParams } from "next/navigation";
import styles from "./index.module.css";
import HorizontalScroller from "./components/HorizontallScroll/HorizontalScroll";

const ProfileContainer = () => {
  const { id } = useParams();
  const heroBannerContent = MainProfile.find((data) => data.role === id);
const formattedId = (() => {
  if (!id) return "";
  const raw = Array.isArray(id) ? id[0] : id;
  return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase();
})();
  useEffect(() => {
    if (!id) return;

    console.log("Route changed — current profile ID:", id);

    // Example: reset scroll position on route change
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Example: play with hero banner (you can trigger animations here)
    const bannerEl = document.querySelector(`.${styles.profileContainer}`);
    if (bannerEl) {
      bannerEl.classList.add("fade-in");
      setTimeout(() => bannerEl.classList.remove("fade-in"), 500);
    }
  }, [id]);

  if (
    !heroBannerContent?.heroBanner ||
    heroBannerContent?.topPicks.length === 0
  ) {
    return null;
  }

  const mainHeroBannerContent = heroBannerContent.heroBanner;

  return (
    <div className={styles.profileContainer}>
      <HeroBanner {...mainHeroBannerContent} />
      <HorizontalScroller
        title={`Today's Top Picks for ${formattedId}`}
        data={heroBannerContent.topPicks}
      />
      <HorizontalScroller
        title={`Continue Watching for ${formattedId}`}
        data={heroBannerContent.continueWatching}
      />
    </div>
  );
};

export default ProfileContainer;
