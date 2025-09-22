import React from "react";
import styles from "./musicCard.module.css";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

export interface MusicCardProps {
  title: string; // Song title
  artist: string; // Artist name
  imgSrc: string; // Thumbnail or cover image
  href: string; // YouTube or Spotify link
}

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  artist,
  imgSrc,
  href,
}) => {
  return (
    <div className={styles.musicCard}>
      <div className={styles.imageWrapper}>
        <Image
          width={1000}
          height={1000}
          src={imgSrc}
          alt={`${title} cover`}
          className={styles.image}
        />
        <a
          className={styles.playButton}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPlay />
        </a>
      </div>

      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.artist}>{artist}</p>
      </div>
    </div>
  );
};

export default MusicCard;
