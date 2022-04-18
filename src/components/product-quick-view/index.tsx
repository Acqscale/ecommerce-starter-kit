import { FunctionComponent, useState } from 'react';

import { XIcon } from '@heroicons/react/outline';

import ProductRating from '../reviews/rating';
import SizeInput from '../size-input';
import Button from '../ui/button';
import styles from './index.module.scss';

type ProductQuickViewProps = {
  onClose: () => void;
  product: {
    id: number | string;
    name: string;
    price: number;
    imgSrc: string;
    imgAlt: string;
    rating: number;
    colors: {
      id: number | string;
      label: string;
    }[];
    sizes: string[];
  };
};

const ProductQuickView: FunctionComponent<ProductQuickViewProps> = ({
  onClose,
  product,
}) => {
  const [selectedColor, setSelectedColor] = useState<number | string>(
    product?.colors[0]?.id || ''
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes[0] || ''
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <XIcon className={styles.close} onClick={onClose} />
        <div className={styles.content}>
          <div>
            <img
              className={styles.productImage}
              src={product.imgSrc}
              alt={product.imgAlt}
            />
          </div>
          <div>
            <div className={styles.top}>
              <h2 className={styles.name}>{product.name}</h2>
              <XIcon className={styles.close} onClick={onClose} />
            </div>
            <span className={styles.price}>${product.price.toFixed(2)}</span>
            <div className={styles.reviews}>
              <ProductRating rating={product.rating} />
              <a href="#">See all 512 reviews</a>
            </div>
            <div className={styles.colors}>
              {product.colors.map(({ id, label }) => (
                <button
                  key={id}
                  className={`${styles.button} ${
                    selectedColor === id ? styles.currentColor : ''
                  }`}
                  onClick={() => setSelectedColor(id)}
                >
                  {label}
                </button>
              ))}
            </div>
            <SizeInput
              sizes={product.sizes}
              selectedSize={selectedSize}
              setSize={setSelectedSize}
            />
            <p className={styles.description}>
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <Button color="primary" fullWidth classes="mb-3">
              Add to cart
            </Button>
            <Button classes="bg-primary text-primary bg-opacity-5" fullWidth>
              View full details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
