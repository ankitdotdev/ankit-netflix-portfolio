"use client";
import React from "react";
import styles from "./index.module.css";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  const socialIcons = [
    {
      icon: <CiMail />,
      route: "mailto:ankitmishra.dev11@gmail.com",
    },
    {
      icon: <FaGithub />,
      route: "mailto:ankitmishra.dev11@gmail.com",
    },
    {
      icon: <FaXTwitter />,
      route: "mailto:ankitmishra.dev11@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      route: "mailto:ankitmishra.dev11@gmail.com",
    },
  ];

  const includedPath = ["/contact-me"];

  if (includedPath.includes(pathName)) {
    return (
      <footer className={styles.footer}>
        <ul className={styles.iconList}>
          {socialIcons.map((data, index) => (
            <li key={index} className={styles.iconItem}>
              <a href={data.route} target="_blank" rel="noopener noreferrer">
                {data.icon}
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.copyText}>
          © 2025 Ankit Mishra. All rights reserved.
        </p>
      </footer>
    );
  }

  return null;
};

export default Footer;
