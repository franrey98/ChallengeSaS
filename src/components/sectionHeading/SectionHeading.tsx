import React from "react";
import styles from "./sectionHeading.module.css";

export default function SectionHeading({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <h2 className={styles.heading}>{children}</h2>;
}
