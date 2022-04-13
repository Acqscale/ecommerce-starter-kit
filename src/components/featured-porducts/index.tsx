import { FunctionComponent, useEffect, useState } from 'react';

import ProductCard from '../product-card';
import Button from '../ui/button';
import styles from './styles.module.css';

type FeaturedProductsProps = {
  data: {
    id: number | string;
    label: string;
    products: {
      id: number | string;
      name: string;
      price: number;
      imgSrc: string;
      imgAlt: string;
    }[];
  }[];
};

const FeaturedProducts: FunctionComponent<FeaturedProductsProps> = ({
  data,
}) => {
  const [currentCategoryId, setCurrentCategoryId] = useState<string | number>(
    data[0]?.id || ''
  );

  const [products, setProducts] = useState(data[0]?.products);

  useEffect(() => {
    const nextCategory = data.find((i) => i.id === currentCategoryId);

    setProducts(nextCategory?.products);
  }, [currentCategoryId, data]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Featured Products</h2>
      <div className={styles.categories}>
        {data.map(({ id, label }) => (
          <div key={id} className={styles.category}>
            <Button
              onClick={() => setCurrentCategoryId(id)}
              variant={currentCategoryId === id ? 'contained' : 'text'}
              color={currentCategoryId === id ? 'info' : 'transparent'}
            >
              <span
                className={
                  currentCategoryId === id
                    ? styles.buttonTextSelected
                    : styles.buttonText
                }
              >
                {label}
              </span>
            </Button>
          </div>
        ))}
      </div>
      <div className={styles.products}>
        {products?.map(({ id, name, price, imgSrc, imgAlt }) => (
          <ProductCard
            key={id}
            name={name}
            price={price}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
