import { FunctionComponent } from 'react';

import Button from '../ui/button';
import styles from './index.module.css';

type ProductCardProps = {
  name: string;
  price: number;
  imgSrc: string;
  imgAlt: string;
};

const ProductCard: FunctionComponent<ProductCardProps> = ({
  name,
  price,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div className={styles.product}>
      <img src={imgSrc} alt={imgAlt} />
      <div className={styles.productContent}>
        <h5 className={styles.productName}>{name}</h5>
        <p className={styles.productPrice}>{`$${price.toFixed(2)}`}</p>
        <div className={styles.buttonWrapper}>
          <Button onClick={() => {}} variant="outline">
            Add to card
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;