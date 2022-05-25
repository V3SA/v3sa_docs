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
        <img className={styles.logo} src="img/v3sa.png" />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img className={styles.logo} src="img/boxlogo.png" />
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="docs/intro">
            Welcome - Introduction 📦
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
      title={`${siteConfig.title}  V3SA Docs`}
      description="Building the bridge between DeFI and Traditional Finance."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
