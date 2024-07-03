"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../sectionHeading/SectionHeading";
import styles from "./interests.module.css";
import { listOfInterest } from "../../lib/data";
const Interests = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Mis intereses</SectionHeading>
      <section className={styles.interests}>
        <div className={styles.interestsList}>
          {listOfInterest.map((interest, index) => (
            <div key={index} className={styles.interest}>
              <p className={styles.title}>{interest.title}</p>
              <p className={styles.description}>{interest.description}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  );
};

export default Interests;
