import { AggregateRatingSchemaMarkup, ReviewSchemaMarkup } from '../types';

export type ProductOfferSchemaMarkup = {
  '@type': string;
  price: number;
  availability: string;
  priceCurrency?: string;
  sku?: string;
  image?: string;
  url?: string;
};

type ProductBrandSchemaMarkup = {
  '@type': string;
  name: string;
};

export type ProductSchemaMarkup = {
  '@context': string;
  '@type': string;
  name: string;
  description?: string;
  image?: string[];
  sku?: string;
  gtin?: string;
  brand?: ProductBrandSchemaMarkup;
  offers?: ProductOfferSchemaMarkup[];
  review?: ReviewSchemaMarkup[];
  aggregateRating?: AggregateRatingSchemaMarkup;
};
