import React, { useRef, useState } from "react";
import styles from "./HeroBanner.module.css";
import { HeroBannerTypes } from "../../types/MainProfileTypes";
import { FaVolumeMute, FaVolumeUp, FaRedo } from "react-icons/fa";

const HeroBanner: React.FC<HeroBannerTypes> = ({
  videoSrc,
  ctas,
  description,
  title,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className={styles.heroBanner}>
      {/* Background Video */}
      <video
        ref={videoRef}
        className={styles.videoBg}
        autoPlay
        muted={isMuted}
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Control Buttons */}
      <div className={styles.videoControls}>
        <button onClick={toggleMute} title="Toggle Sound">
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <button onClick={restartVideo} title="Restart Video">
          <FaRedo />
        </button>
      </div>

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
