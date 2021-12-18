import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Password Visibility Toggle</title>
        <meta name="description" content="Blog Content" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">Dhrumil's Blog</a>
        </h1>

        <p className={styles.description}>
          Let's create a password visibility toggle component{' '}
          <code className={styles.code}>components/PasswordField.tsx</code>
        </p>

        <div className={styles.grid}>
          <Link href="/login">
          <a>
          <div className={styles.card}>
            <h2>Password Visibility Toggle &rarr;</h2>
            <p>TypeScript based component.</p>
          </div>
          </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Dhrumil Limbad
        </a>
      </footer>
    </div>
  )
}

export default Home