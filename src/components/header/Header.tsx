"use client";
import React, { useEffect, useState } from "react";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import styles from "./header.module.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${!isVisible ? styles.hidden : ""}`}>
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
              <ScrollLink
                to={link.hash}
                smooth={true}
                duration={500}
                className={styles.link}
              >
                {link.name}
              </ScrollLink>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
