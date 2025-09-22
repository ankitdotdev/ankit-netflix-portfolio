import React from "react";
import styles from "./certificationsCard.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  href,
  Icon,
}) => {
  return (
    <article className={styles.certificateCard}>
      <div className={styles.topRow}>
        {/* Brand/icon on the left */}
        <Icon className={styles.certificateBrand} aria-hidden="true" />

        {/* external link on the right */}
        <a
          className={styles.iconLink}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open certificate for ${title} (opens in new tab)`}
        >
          <FaExternalLinkAlt className={styles.certificateIcon} />
        </a>
      </div>

      {/* Title / big text */}
      <div className={styles.certificationContext}>
        <p className={styles.title}>{title}</p>
      </div>

      {/* Footer lines */}
      <p className={styles.sourceText}>{issuer}</p>
      <p className={styles.issuedDateText}>{date}</p>
    </article>
  );
};

export default CertificationCard;
