import Head from "next/head";
import { Links } from "../components/Links";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Index Page</h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>Index Page</code>
        </p>

        <Links />
      </main>

      <Footer />
    </div>
  );
}
