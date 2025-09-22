import React from "react";
import styles from "./index.module.css";
import GameCard from "./components/gamesCard";

const GamesContainer = () => {
  return (
    <div className={styles.container}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundAnimations}>
        <div
          className={styles.floatingShape}
          style={{ left: "10%", top: "20%", animationDelay: "0s" }}
        ></div>
        <div
          className={styles.floatingShape}
          style={{ right: "15%", top: "60%", animationDelay: "2s" }}
        ></div>
        <div
          className={styles.floatingShape}
          style={{ left: "70%", bottom: "30%", animationDelay: "4s" }}
        ></div>
        <div
          className={styles.glowOrb}
          style={{ left: "5%", bottom: "15%" }}
        ></div>
        <div
          className={styles.glowOrb}
          style={{ right: "8%", top: "25%" }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.titleContainer}>
          <div className={styles.titleBackground}>
            <h1 className={styles.mainTitle}>
              <span className={styles.titleWord}>GAMING</span>
              <span className={styles.titleWord}>UNIVERSE</span>
            </h1>
          </div>
          <div className={styles.glowLine}></div>
        </div>

        <div className={styles.quoteContainer}>
          <p className={styles.quote}>
            {`In the realm of pixels and code, legends are born and adventures
            never end.`}
          </p>
          <div className={styles.quoteAccent}>⚡</div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={styles.statCard}>
        <div className={styles.statLabel}>Legendary Games</div>
        <div className={styles.statGlow}></div>
      </div>

      {/* Games Section */}
      <div className={styles.gamesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Collection</h2>
          <div className={styles.sectionLine}></div>
        </div>

        <div className={styles.gamesGrid}>
          <GameCard
            title="GTA Vice City"
            genre="Open World Action"
            image="https://i.ytimg.com/vi/eul7w2ndOMs/hqdefault.jpg"
            description="The ultimate 80s crime saga"
          />
          <GameCard
            title="Counter Strike"
            genre="FPS Tactical Shooter"
            image="https://images4.alphacoders.com/576/576758.jpg"
            description="Legendary competitive shooter"
          />
          <GameCard
            title="Call of Duty Mobile"
            genre="Mobile Battle Royale"
            image="https://images.alphacoders.com/119/1192299.jpg"
            description="Mobile warfare excellence"
          />
          <GameCard
            title="Grand Theft Auto V"
            genre="Action-Adventure / Open World"
            image="https://images4.alphacoders.com/177/177796.jpg"
            description="Experience a sprawling open world with action-packed missions, thrilling heists, and endless exploration."
          />

          <GameCard
            title="Dying Light"
            genre="Survival Horror / Action RPG"
            image="https://images.alphacoders.com/568/568688.jpg"
            description="Parkour through a post-apocalyptic city, fight hordes of zombies, and survive the night using skill and strategy."
          />

          <GameCard
            title="TOD (Tower of Defense / Example)"
            genre="Strategy / Tower Defense"
            image="https://picfiles.alphacoders.com/149/149084.png" // replace with proper image
            description="Build towers, plan defenses, and strategically protect your base from waves of incoming enemies."
          />
          <GameCard
            title="Half-Life"
            genre="Sci-Fi / FPS"
            image="https://images4.alphacoders.com/366/36.jpg" // replace with proper Half-Life image
            description="Step into the shoes of Gordon Freeman and battle alien forces in this revolutionary story-driven first-person shooter."
          />
          <GameCard
            title="Prince of Persia"
            genre="Action / Adventure / Platformer"
            image="https://picfiles.alphacoders.com/457/457464.jpg" // replace with proper image
            description="Embark on epic adventures, solve puzzles, and master acrobatic combat in this classic action-platformer."
          />
        </div>
      </div>
    </div>
  );
};

export default GamesContainer;
