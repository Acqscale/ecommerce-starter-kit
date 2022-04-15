import { FunctionComponent } from 'react';

import { CheckIcon } from '@heroicons/react/outline';

import styles from './index.module.scss';

type CampaignBenefitsProps = {
  heading: string;
  promotionText: string;
  benefits: {
    id: number | string;
    title: string;
    description: string;
  }[];
};

const CampaignBenefits: FunctionComponent<CampaignBenefitsProps> = ({
  heading,
  promotionText,
  benefits,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.promo}>{promotionText}</p>
      <div className={styles.benefits}>
        {benefits.map(({ id, title, description }) => (
          <div key={id} className={styles.benefit}>
            <CheckIcon className={styles.check} />
            <div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignBenefits;
