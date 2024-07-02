"use client";
import React from "react";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <motion.div
        className={styles.motionDiv}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {links.map((link) => (
            <motion.li
              className={styles.li}
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link className={styles.link} href={link.hash}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
