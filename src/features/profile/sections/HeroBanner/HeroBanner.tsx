import React from "react";
import styles from "./HeroBanner.module.css";
import { useRouter } from "next/navigation";
import { HeroBannerTypes } from "../../types/MainProfileTypes";
import Image from "next/image";

const HeroBanner: React.FC<HeroBannerTypes> = ({
  videoSrc,
  ctas,
  description,
  title,
}) => {
  const router = useRouter();

  return (
    <div className={styles.heroBanner}>
      {/* Background GIF */}
      <Image
        src={videoSrc}
        alt="Banner Background"
        fill
        className={styles.videoBg}
        style={{ objectFit: "cover", filter: "brightness(0.5)" }}
        priority
      />
      {/* Overlay Content */}
      <div className={styles.heroContext}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroDescription}>{description}</p>
        <div className={styles.heroCTAs}>
          {ctas.map((cta, index) => (
            <button key={index} onClick={() => router.push(cta.route)}>
              {cta.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
