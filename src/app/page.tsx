'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setShowIntro(true);

    // Play sound
    try {
      //eslint-disable-next-line
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      await audioContext.resume();
      const response = await fetch("/sounds/netflixSound/netflix-sound.mp3");
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start(0);
    } catch (err) {
      console.error("Sound playback failed:", err);
    }

    // Delay animation start by 2 seconds
    setTimeout(() => {
      setStartAnimation(true);
    }, 2000);
  };

  // Redirect to browse after 4s
  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        router.push("/browse");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [showIntro, router]);

  return (
    <div className={styles.wrapper}>
      {!showIntro && (
        <div className={styles.clickScreen} onClick={handleClick}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={300}
            height={100}
            className={styles.introLogo}
          />
        </div>
      )}

      {showIntro && (
        <div className={styles.introAnimation}>
          <div className={startAnimation ? styles.scalingWrapper : ''}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={300}
              height={100}
              className={styles.introLogo}
            />
          </div>
        </div>
      )}
    </div>
  );
}
