import { FunctionComponent } from 'react';

import styles from './index.module.scss';

type CampaignFeaturedProps = {
  fetured: {
    id: number | string;
    imgSrc: string;
    imgAlt: string;
  }[];
};

const CampaignFeatured: FunctionComponent<CampaignFeaturedProps> = ({
  fetured,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>As featured in</h2>
      <div className={styles.featured}>
        {fetured.map(({ id, imgSrc, imgAlt }) => (
          <img key={id} src={imgSrc} alt={imgAlt} />
        ))}
      </div>
    </div>
  );
};

export default CampaignFeatured;
