import { FunctionComponent } from 'react';

import ListItem, { Product, ViewType } from './item';

interface ProductsListProps {
  products: Product[];
  viewType: ViewType;
}

const ProductsList: FunctionComponent<ProductsListProps> = ({
  products,
  viewType,
}) => {
  const wrapperStyles =
    viewType === 'GRID_VIEW'
      ? 'grid grid-cols-1 gap-x-6 gap-y-10 mt-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'
      : 'flex flex-col';

  return (
    <div className={wrapperStyles}>
      {products.map((product) => (
        <ListItem key={product.id} product={product} viewType={viewType} />
      ))}
    </div>
  );
};

export default ProductsList;
