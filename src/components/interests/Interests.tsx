import React from "react";
import SectionHeading from "../sectionHeading/SectionHeading";
import styles from "./interests.module.css";
import { listOfInterest } from "../../lib/data";
const Interests = () => {
  return (
    <section className={styles.interests}>
      <SectionHeading>Mis intereses</SectionHeading>
      <div className={styles.interestsList}>
        {listOfInterest.map((interest, index) => (
          <div key={index} className={styles.interest}>
            <p className={styles.title}>{interest.title}</p>
            <p className={styles.description}>{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
