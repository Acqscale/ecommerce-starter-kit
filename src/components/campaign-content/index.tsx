import { FunctionComponent } from 'react';

import styles from './index.module.scss';

const CampaignContent: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>JavaScript for Beginners</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>
      <p className={`${styles.text} ${styles.small}`}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>
      <ul>
        <li className={`${styles.text} ${styles.small}`}>
          I was really pleased with the overall shopping experience. My order
          even included a little personal, handwritten note, which delighted me!
        </li>
        <li className={`${styles.text} ${styles.small}`}>
          The product quality is amazing, it looks and feel even better than I
          had anticipated. Brilliant stuff! I would gladly recommend this store
          to my friends. And, now that I think of it.. I actually have, many
          time!
        </li>
      </ul>
      <p className={`${styles.text} ${styles.small}`}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>
      <h3 className={styles.subheading}>From beginner to expert in 30 days</h3>
      <p className={`${styles.text} ${styles.small}`}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>
      <p className={`${styles.text} ${styles.small} ${styles.quote}`}>
        I was really pleased with the overall shopping experience. My order even
        included a little personal, handwritten note, which delighted me! The
        product quality is amazing, it looks and feel even better than I had
        anticipated. Brilliant stuff! I would gladly recommend this store to my
        friends. And, now that I think of it.. I actually have, many time!
      </p>
      <p className={`${styles.text} ${styles.small}`}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>
      <img src="/assets/images/campaign-cover.png" alt="image" />
      <p className={`${styles.text} ${styles.small}`}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>
    </div>
  );
};

export default CampaignContent;
