"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import SectionHeading from "../sectionHeading/SectionHeading";

const About = () => {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre Mi</SectionHeading>
      <p className={styles.text}>
        Después de graduarme con un título en{" "}
        <span className={styles.medium}>Ciencias de la Computación</span>,
        decidí seguir mi pasión por la programación. Me inscribí en un bootcamp
        de codificación y aprendí desarrollo web{" "}
        <span className={styles.medium}>full-stack</span>. Mi parte favorita de
        programar es el aspecto de resolución de problemas.{" "}
        <span className={styles.underline}>Amo</span> la sensación de finalmente
        encontrar una solución a un problema. Mi conjunto principal de
        tecnologías incluye{" "}
        <span className={styles.stack}>
          React, Next.js, Node.js, Express.js y MongoDB
        </span>
        . También tengo experiencia con TypeScript y Prisma. Siempre estoy
        buscando aprender nuevas tecnologías. Actualmente estoy buscando una
        posición <span className={styles.medium}>full-time</span> como
        desarrollador de software.
      </p>
    </motion.section>
  );
};

export default About;
