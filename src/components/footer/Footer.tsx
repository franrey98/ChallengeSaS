import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.textFooter}>
          © 2024 Francisco Rey. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
