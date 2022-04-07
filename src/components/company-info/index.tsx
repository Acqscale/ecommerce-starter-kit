import { FunctionComponent } from 'react';

import { ArrowSmRightIcon } from '@heroicons/react/outline';

import styles from './index.module.css';

type CompanyInfoProps = {
  coverImg: string;
  coverImgAlt: string;
  heading: string;
  description: string;
  stats: {
    id: number | string;
    key: string;
    value: string;
  }[];
};

const CompanyInfo: FunctionComponent<CompanyInfoProps> = ({
  coverImg,
  coverImgAlt,
  heading,
  description,
  stats,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.coverWrapper}>
          <img className={styles.cover} src={coverImg} alt={coverImgAlt} />
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.heading}>{heading}</div>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.stats}>
            {stats.map(({ id, key, value }) => (
              <div key={id} className={styles.stat}>
                <h3>{key}</h3>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <div className={styles.more}>
            <div>Learn moreabout how we’re changing the world</div>
            <ArrowSmRightIcon className={styles.arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
