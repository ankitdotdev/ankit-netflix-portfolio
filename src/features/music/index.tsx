import React from "react";
import MusicCard from "./components/musicCard";
import styles from "./index.module.css";

function MusicSection() {
  return (
    <div className={styles.section}>
      {/* Thought / Quote */}
      <p className={styles.quote}>
        “Music isn’t just sound, it’s a heartbeat to the soul.” 🎶
      </p>

      {/* Genre buttons */}
      <h2 className={styles.heading}>Explore by Genre</h2>
      <div className={styles.genreRow}>
        <button className={styles.genreBtn}>Phonk</button>
        <button className={styles.genreBtn}>Arijit Singh</button>
        <button className={styles.genreBtn}>XXXTentacion</button>
        <button className={styles.genreBtn}>Billie Eilish</button>
      </div>

      {/* Albums */}
      <h2 className={styles.heading}>Favorite Albums</h2>
      <div className={styles.albumGrid}>
        <MusicCard
          title="Best Of Arijit Singh"
          artist="Arijit Singh"
          imgSrc="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8474d28e2d8f83ff5f0b653212"
          href="https://open.spotify.com/playlist/7qxn6GsFH77ghVtKzOnAYA"
        />
        <MusicCard
          title="This is XXXTentacion"
          artist="XXXTentacion"
          imgSrc="https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0AnZXW-default.jpg"
          href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO0AnZXW"
        />
        <MusicCard
          title="Billie Eilish"
          artist="Billie Eilish"
          imgSrc="https://i.scdn.co/image/ab67616d00001e022a038d3bf875d23e4aeaa84e"
          href="https://open.spotify.com/album/0JGOiO34nwfUdDrD612dOp"
        />
      </div>
    </div>
  );
}

export default MusicSection;
