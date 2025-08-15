import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <nav>
          <Link href="/about-me">About</Link> | 
          <Link href="/project">Projects</Link>
        </nav>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
