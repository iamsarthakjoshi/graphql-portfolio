import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';
import styles from '../styles/Home.module.css';

const PortfolioQuery = gql`
  query PortfolioQuery {
    bio {
      name
      email
      tagline
      website
      github
      linkedin
      objective
    }
    positions {
      id
      title
      company
      location
      years
      months
      startDate
      endDate
      achievements
    }
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(PortfolioQuery);

  if (error) {
    return (
      <header>
        <h1>Sarthak Joshi</h1>
        <h2>Ops! Something went wrong.</h2>
      </header>
    );
  }

  if (loading) {
    return (
      <header>
        <h1>Sarthak Joshi</h1>
        <h2>Loading...</h2>
      </header>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Documentation &rarr;</h3>
            {JSON.stringify(data)}
          </div>

          <div className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a rel="noopener noreferrer">
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
