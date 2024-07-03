"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import SectionHeading from "../sectionHeading/SectionHeading";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre Mí</SectionHeading>
      <div className={styles.section}>
        <p className={styles.text}>
          Arranque a estudiar programación hace mas de 3 años. Mi parte favorita
          de desarrollar es el aspecto de la resolución de problemas. Me encanta
          la sensación de finalmente encontrar una solución a un problema. Mi
          conjunto principal de tecnologías incluye React, React Native,
          Typescript Next.js, Node.js, Express.js y MongoDB. También tengo
          experiencia con ReduxJS. Siempre estoy buscando aprender nuevas
          herramientas. Actualmente estoy buscando una posición full-time como
          desarrollador de software.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
