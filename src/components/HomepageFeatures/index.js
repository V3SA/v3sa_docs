import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Blue Box Suites',
    Svg: require('@site/static/img/BlueBox.svg').default,
    description: (
      <>
        Including: DaPP Protocol and - REDACTED -
      </>
    ),
  },
  {
    title: 'Purple Box Suites',
    Svg: require('@site/static/img/PurpleBox.svg').default,
    description: (
      <>
        - REDACTED -
      </>
    ),
  },
  {
    title: 'Red Box Suites',
    Svg: require('@site/static/img/RedBox.svg').default,
    description: (
      <>
        - REDACTED -
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
