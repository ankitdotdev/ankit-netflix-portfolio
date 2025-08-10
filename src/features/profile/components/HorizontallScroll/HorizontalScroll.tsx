"use client";

import { useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Card from "../Card/Card";
import styles from "./HorizontalScroll.module.css";
import { ImageCard } from "../../types/MainProfileTypes";
import { FaChevronRight } from "react-icons/fa";

interface HorizontalScrollerProps {
  title: string;
  data: ImageCard[];
}

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  title,
  data,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(data.length >= 5);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.topPicksContainer}>
      <h1 className={styles.topPicksTitle}>
        {title}{" "}
        <span>
          <FaChevronRight />
        </span>
      </h1>

      <div className={styles.sliderWrapper}>
        {canScrollLeft && (
          <button
            className={`${styles.scrollBtn} ${styles.left}`}
            onClick={() => scroll("left")}
          >
            <IoChevronBackOutline />
          </button>
        )}

        <div
          className={styles.topPicksRow}
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`${styles.cardWave}`}
              style={{ animationDelay: `${index * 0.1}s` }} // stagger delay
            >
              <Card {...item} />
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            className={`${styles.scrollBtn} ${styles.right}`}
            onClick={() => scroll("right")}
          >
            <IoChevronForwardOutline />
          </button>
        )}
      </div>
    </div>
  );
};

export default HorizontalScroller;
