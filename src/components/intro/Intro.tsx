"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./intro.module.css";

const Intro = () => {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.flexCenter}>
        <div className={styles.relativeDiv}>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/cvfoto.jpg"
              alt="Francisco Rey photo"
              width={292}
              height={292}
              quality={95}
              priority
              className={styles.image}
            />
            <motion.span
              className={styles.wave}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className={styles.bold}>Hola, mi nombre es Francisco Rey.</span>{" "}
        Soy <span className={styles.bold}>full-stack developer</span> y tengo{" "}
        <span className={styles.bold}>2 años</span> de experiencia. Disfruto
        construir{" "}
        <span className={styles.italic}>
          sitios webs & aplicaciones mobiles
        </span>
        .
      </motion.h1>
    </section>
  );
};

export default Intro;
