// Home page: https://johnbmarks.github.io/portfolio/
// To change the wording, edit the text between the tags below.

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// The "highlights" boxes under the banner. Edit, add, or remove items here.
const highlights = [
  {
    title: 'Developer documentation',
    description:
      'Developer guides and API documentation built from scratch as a sole technical writer.',
  },
  {
    title: 'Processes and standards',
    description:
      'Documentation standards and publication processes that other teams adopted company-wide.',
  },
  {
    title: 'AI governance',
    description:
      'Guidelines for safe, effective use of AI tools across an organization.',
  },
];

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          John Marks
        </Heading>
        <p className={clsx('hero__subtitle', styles.thesis)}>
          Senior technical writer who identifies business problems and process
          gaps, and solves them with clear documentation, processes, and
          standards.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/portfolio">
            View my portfolio
          </Link>
          <Link className={clsx('button button--outline button--lg', styles.outlineButton)} to="/resume">
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Senior technical writer"
      description="Portfolio of John Marks, senior technical writer">
      <HomepageHeader />
      <main className="container margin-vert--lg">
        <div className="row">
          {highlights.map((item) => (
            <div key={item.title} className="col col--4 margin-bottom--lg">
              <Heading as="h3">{item.title}</Heading>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
