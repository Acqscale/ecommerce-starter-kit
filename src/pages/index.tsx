import { useState } from 'react';

import CategoryFilters from '@/components/category-filters';
import MobileCategoryFilters from '@/components/category-filters/mobile';
import ProductsList from '@/components/product-list';
import { ViewType } from '@/components/product-list/item';
import { Meta } from '@/layout/Meta';
import { sortOptions, subCategories, filters } from '@/mock-data/category';
import { products } from '@/mock-data/products';
import { Main } from '@/templates/Main';

export default function CategoryPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [viewType, setViewType] = useState<ViewType>(ViewType.listView);

  const handleViewTypeChange = () => {
    setViewType(
      viewType === ViewType.gridView ? ViewType.listView : ViewType.gridView
    );
  };

  return (
    <Main meta={<Meta title="Products" description="Products" />}>
      <MobileCategoryFilters
        subCategories={subCategories}
        filters={filters}
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
      />
      <CategoryFilters
        sortOptions={sortOptions}
        subCategories={subCategories}
        filters={filters}
        viewType={viewType}
        handleViewTypeChange={handleViewTypeChange}
        setMobileFiltersOpen={setMobileFiltersOpen}
      >
        <div className="lg:col-span-3">
          <ProductsList products={products} viewType={viewType} />
        </div>
      </CategoryFilters>
    </Main>
  );
}
