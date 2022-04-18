import { FunctionComponent } from 'react';

import Button from '../ui/button';
import styles from './index.module.css';

type ProductCardProps = {
  id: number | string;
  name: string;
  price: number;
  imgSrc: string;
  imgAlt: string;
  onSelectProduct: (pruductId: number | string) => void;
};

const ProductCard: FunctionComponent<ProductCardProps> = ({
  id,
  name,
  price,
  imgSrc,
  imgAlt,
  onSelectProduct,
}) => {
  return (
    <div className={styles.product}>
      <img src={imgSrc} alt={imgAlt} />
      <div className={styles.productContent}>
        <h5 className={styles.productName}>{name}</h5>
        <p className={styles.productPrice}>{`$${price.toFixed(2)}`}</p>
        <Button
          onClick={() => onSelectProduct(id)}
          variant="outline"
          size="small"
          color="primary"
        >
          Add to card
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
