import React from "react";
import styles from "./sectionHeading.module.css";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className={styles.heading}>{children}</h2>;
}
