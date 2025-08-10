import React from "react";
import styles from "./HeroBanner.module.css";
import { HeroBannerTypes } from "../../types/MainProfileTypes";
import Image from "next/image";
const HeroBanner: React.FC<HeroBannerTypes> = ({
  videoSrc, // You can rename this to imgSrc if you want
  ctas,
  description,
  title,
}) => {
  return (
    <div className={styles.heroBanner}>
      {/* Background GIF/Image */}
      <Image
        width={100}
        height={100}
        src={videoSrc}
        alt={title || "Hero Banner"}
        className={styles.imageBg}
      />

      {/* Overlay Content */}
      <div className={styles.heroContext}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroDescription}>{description}</p>
        <div className={styles.heroCTAs}>
          {ctas.map((cta, index) => (
            <a
              key={index}
              href={cta.route}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.heroButton} ${
                cta.variant === "primary" ? styles.primary : styles.secondary
              }`}
            >
              {cta.icon && (
                <span className={styles.buttonIcon}>{cta.icon}</span>
              )}
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
