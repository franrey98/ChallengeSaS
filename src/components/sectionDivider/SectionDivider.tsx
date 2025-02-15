"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./sectionDivider.module.css";

const SectionDivider = () => {
  return (
    <motion.div
      className={styles.divider}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
};

export default SectionDivider;
