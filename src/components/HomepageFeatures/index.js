import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

// TOP 3 Points
// Simple
// Transparent
// Secure
const FeatureList = [
  {
    title: "Simple",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        DaPP is easy to use. Pay someone over time, or get paid over time. It's
        ideal for paying artists, developers, community managers, DAO members,
        or other DAOs.
      </>
    ),
  },
  {
    title: "Transparent",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Our risk averse contracts protect both parties by providing transparency
        up front. If someone isn't holding up to the bargain, any party is able
        to cancel, for a fee.
      </>
    ),
  },
  {
    title: "Secure",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        We build using the latest Anchor version for Rust. We check every
        account, our source of truth contract, time based contract state and use
        PDAs!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
