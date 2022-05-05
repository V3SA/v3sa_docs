import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // hero--primary
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <img className={styles.logo} src="img/logo.png" />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img className={styles.logo} src="img/piggy.png" />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            DaPP - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | V3SA Docs`}
      description="Decentralized Payment Processing Protocol; Built on Solana. Pay | Build | Profit"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
