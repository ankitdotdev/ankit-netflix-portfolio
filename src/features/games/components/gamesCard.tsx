import React from "react";
import styles from "./gameCard.module.css";
import Image from "next/image";

interface GameCardProps {
  title: string;
  genre: string;
  image: string;
  description: string;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  genre,
  image,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          width={1000}
          height={1000}
          src={image}
          alt={title}
          className={styles.gameImage}
        />
        {/* <div className={styles.overlay}>
          <button className={styles.playButton}>
            <span className={styles.playIcon}>▶</span>
            PLAY
          </button>
        </div> */}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.gameTitle}>{title}</h3>
        <p className={styles.genre}>{genre}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default GameCard;
