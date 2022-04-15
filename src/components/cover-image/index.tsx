import { FunctionComponent, ReactNode } from 'react';

import styles from './index.module.scss';

type CoverImageProps = {
  children?: ReactNode;
  coverImg: string;
  coverAlt: string;
};

const CoverImage: FunctionComponent<CoverImageProps> = ({
  coverImg,
  coverAlt,
  children,
}) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.cover} src={coverImg} alt={coverAlt} />
      {children && <div className={styles.childrenContainer}>{children}</div>}
    </div>
  );
};

export default CoverImage;
