import { FunctionComponent } from 'react';

import { ArrowSmRightIcon } from '@heroicons/react/outline';

import Button from '../ui/button';
import styles from './index.module.css';

type FeaturedCollectionProps = {
  collections: {
    id: number | string;
    imgSrc: string;
    imgAlt: string;
    name: string;
  }[];
};

const FeaturedCollections: FunctionComponent<FeaturedCollectionProps> = ({
  collections,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <h2 className={styles.title}>Featured collections</h2>
        <a href="#" className={styles.browse}>
          Browse all categories
          <ArrowSmRightIcon className={styles.arrow} />
        </a>
      </div>

      <div className={styles.collections}>
        {collections.map(({ id, imgSrc, imgAlt, name }) => (
          <div key={id} className={styles.collection}>
            <img src={imgSrc} alt={imgAlt} className={styles.image} />
            <div className={styles.content}>
              <div>
                <h3 className={styles.label}>{name}</h3>
                <Button
                  onClick={() => {}}
                  variant="outline"
                  classes="border-white text-white"
                  size="small"
                >
                  Start shopping
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollections;
