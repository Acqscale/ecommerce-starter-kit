import { useState } from 'react';

import Carousel from '@/components/carousel';
import CompanyInfo from '@/components/company-info';
import FeaturedCollections from '@/components/featured-collections';
import FeaturedProducts from '@/components/featured-porducts';
import Highlights from '@/components/highlights';
import ProductQuickView from '@/components/product-quick-view';
import Quotes from '@/components/quotes';
import { Meta } from '@/layout/Meta';
import { carouselData } from '@/mock-data/carousel';
import { companyData } from '@/mock-data/company-info';
import { collections } from '@/mock-data/featured-collections';
import { categories } from '@/mock-data/featured-products';
import { highlightsData, highlightsData2 } from '@/mock-data/highlights';
import { product } from '@/mock-data/product-quick-view';
import { quotesData } from '@/mock-data/quotes';
import { Main } from '@/templates/Main';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<number | string>('');

  const onSelectProduct = (productId: number | string) => {
    setSelectedProduct(productId);
  };

  return (
    <Main meta={<Meta title="Products" description="Products" />}>
      {selectedProduct && (
        <ProductQuickView
          onClose={() => onSelectProduct('')}
          product={product}
        />
      )}
      <Carousel data={carouselData} />
      <Highlights data={highlightsData} />
      <FeaturedProducts data={categories} onSelectProduct={onSelectProduct} />
      <FeaturedCollections collections={collections} />
      <CompanyInfo
        coverImg={companyData.coverImg}
        coverImgAlt={companyData.coverImgAlt}
        heading={companyData.heading}
        description={companyData.description}
        stats={companyData.stats}
      />
      <Highlights data={highlightsData2} inline />
      <Quotes data={quotesData} />
    </Main>
  );
}
