import { FunctionComponent, useMemo } from 'react';

import Link from 'next/link';

export enum ViewType {
  listView = 'LIST_VIEW',
  gridView = 'GRID_VIEW',
}

export interface Product {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  name: string;
  color: string;
  price: string;
  description?: string;
}

interface ProductProps {
  product: Product;
  viewType: ViewType;
}

const ListItem: FunctionComponent<ProductProps> = ({ product, viewType }) => {
  const wrapperClassNames = useMemo(
    () =>
      viewType === ViewType.gridView
        ? 'group relative'
        : 'flex flex-row w-full border border-border-color my-2 p-2 rounded-md relative h-52',
    [viewType]
  );

  const imageWrapperClassNames = useMemo(
    () =>
      viewType === ViewType.gridView
        ? 'overflow-hidden w-full rounded-md group-hover:opacity-75 aspect-w-1 aspect-h-1 lg:h-80 lg:aspect-none min-h-80'
        : 'min-w-fit mr-2 group-hover:opacity-75',
    [viewType]
  );

  const productDescriptionClassNames = useMemo(
    () => (viewType === ViewType.gridView ? 'flex justify-between mt-4' : ''),
    [viewType]
  );

  return (
    <div key={product.id} className={wrapperClassNames}>
      <div className={imageWrapperClassNames}>
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="object-cover object-center w-full h-full rounded-sm lg:w-full lg:h-full"
        />
      </div>
      <div className={productDescriptionClassNames}>
        <div>
          <h3 className="text-sm text-on-background">
            <Link href={`/product/${product.id}`}>
              <a>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </a>
            </Link>
          </h3>
          <p className="mt-1 text-sm text-on-background">{product.color}</p>
        </div>
        <p className="text-sm font-bold text-primary">{product.price}</p>
        {viewType === ViewType.listView && (
          <p className="mt-1 text-xs line-clamp-5 md:text-sm text-on-background">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ListItem;
