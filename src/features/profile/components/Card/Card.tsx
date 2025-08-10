import Image from "next/image";
import styles from "./Card.module.css";
import { useRouter } from "next/navigation";

interface CardProps {
  image: string;
  label: string;
  route: string;
}

const Card: React.FC<CardProps> = ({ image, label, route }) => {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      onClick={() => router.push(route)}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={label}
          fill
          className={styles.cardImage}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.labelName}>{label}</div>
    </div>
  );
};

export default Card;
