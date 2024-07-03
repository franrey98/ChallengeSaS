import Image from "next/image";
import styles from "./page.module.css";
import About from "@/components/about/About";
import Interests from "@/components/interests/Interests";
import ContactForm from "@/components/contactForm/ContactForm";
import Footer from "@/components/footer/Footer";
import SectionDivider from "@/components/sectionDivider/SectionDivider";
import Intro from "@/components/intro/Intro";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <SectionDivider />
      <div className={styles.about}>
        <About />
        <Interests />
      </div>
      <SectionDivider />
      <ContactForm />
      <Footer />
    </main>
  );
}
