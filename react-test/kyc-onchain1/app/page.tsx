import Head from 'next/head';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KYC Onchain</title>
        <meta name="description" content="KYC Onchain application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>KYC Onchain</h1>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter text here"
            className={styles.input}
          />
        </div>
      </main>
    </div>
  );
}
