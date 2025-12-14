"use client";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { BiChip } from "react-icons/bi";
import Image from "next/image";

const ContactMeContainer = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contactCard}>
        <div className={styles.profileSection}>
          <div className={styles.profileImageContainer}>
            <Image
              src="/contactMe.jpg"
              height={1000}
              width={1000}
              alt="Ankit Mishra - Full Stack Developer"
              className={styles.profileImage}
            />
          </div>

          <div className={styles.infoSection}>
            <h1 className={styles.name}>Ankit Mishra</h1>
            <p className={styles.role}>Full-Stack Developer</p>

            <p className={styles.description}>
              Actively seeking full-time opportunities in Web Development,
              leveraging strong expertise in backend development and expanding
              skills in cloud technologies.
            </p>

            <p className={styles.location}>Dombivli, Maharashtra</p>

            <a
              href="https://www.linkedin.com/in/ankit00010/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinButton}
            >
              <FaLinkedinIn size={18} />
              View Profile
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomText}>
        <motion.span
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <BiChip size={22} color="text-green-500" />
          </motion.div>
          <span>
            There are 10 kinds of people: those who understand binary, and those
            who don’t.
          </span>
        </motion.span>
      </div>
    </div>
  );
};

export default ContactMeContainer;
