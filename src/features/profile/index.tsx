"use client";

import React from "react";
import HeroBanner from "./sections/HeroBanner/HeroBanner";
import MainProfile from "./constants/MainProfileData";
import { useParams } from "next/navigation";
// import styles from "./index.module.css"
const ProfileContainer = () => {
  const { id } = useParams();
  const heroBannerContent = MainProfile.find((data) => data.role === id);

  if (!heroBannerContent?.heroBanner) {
    return null;
  }
  const mainHeroBannerContent = heroBannerContent.heroBanner;
  return (
    <div>
      <HeroBanner {...mainHeroBannerContent} />
    </div>
  );
};

export default ProfileContainer;
