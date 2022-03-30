import { FunctionComponent } from 'react';

import moment from 'moment';

import { ReviewSchemaMarkup } from '../types';
import { ProductSchemaMarkup, ProductOfferSchemaMarkup } from './types';

type ProductSchemaPropsOffer = {
  price: number;
  availableForSale: boolean;
  priceCurrency?: string;
  sku?: string;
  imageUrl?: string;
  url?: string;
};

type ProductSchemaPropsReview = {
  title: string;
  content: string;
  score: number;
  createdAtTimestamp: number;
  authorName: string;
  authorEmail?: string;
};

type ProductSchemaProps = {
  name: string;
  description?: string;
  vendor?: string;
  imageUrls?: string[];
  sku?: string;
  gtin?: string;
  bestRating?: number;
  worstRating?: number;
  totalReviewsCount?: bigint;
  totalRating?: number;
  offers?: ProductSchemaPropsOffer[];
  reviews?: ProductSchemaPropsReview[];
};

const ProductSchema: FunctionComponent<ProductSchemaProps> = ({
  name,
  description,
  vendor,
  imageUrls,
  sku,
  gtin,
  bestRating,
  worstRating,
  totalReviewsCount,
  totalRating,
  offers,
  reviews,
}) => {
  const productSchema: ProductSchemaMarkup = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name,
  };

  if (description) {
    productSchema.description = description;
  }

  if (vendor) {
    productSchema.brand = {
      '@type': 'Brand',
      name: vendor,
    };
  }

  if (imageUrls && imageUrls.length > 0) {
    productSchema.image = imageUrls;
  }

  if (sku) {
    productSchema.sku = sku;
  }

  if (gtin) {
    productSchema.gtin = gtin;
  }

  if (totalReviewsCount && totalRating) {
    productSchema.aggregateRating = {
      '@type': 'AggregateRating',
      bestRating,
      worstRating,
      ratingCount: totalReviewsCount,
      reviewCount: totalReviewsCount,
      ratingValue: totalRating,
    };
  }

  if (offers && offers.length > 0) {
    productSchema.offers = offers.map(
      (offer: ProductSchemaPropsOffer): ProductOfferSchemaMarkup => {
        const offerSchemaMarkup: ProductOfferSchemaMarkup = {
          '@type': 'Offer',
          availability: `https://schema.org/${
            offer.availableForSale ? 'InStock' : 'OutOfStock'
          }`,
          price: offer.price,
        };

        if (offer.priceCurrency) {
          offerSchemaMarkup.priceCurrency = offer.priceCurrency;
        }

        if (offer.sku) {
          offerSchemaMarkup.sku = offer.sku;
        }

        if (offer.imageUrl) {
          offerSchemaMarkup.image = offer.imageUrl;
        }

        if (offer.url) {
          offerSchemaMarkup.url = offer.url;
        }

        return offerSchemaMarkup;
      }
    );
  }

  if (reviews && reviews.length > 0) {
    productSchema.review = reviews.map(
      (review: ProductSchemaPropsReview): ReviewSchemaMarkup => {
        const reviewSchemaMarkup: ReviewSchemaMarkup = {
          '@type': 'Review',
          name: review.title,
          reviewBody: review.content,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: review.score,
          },
          datePublished: moment(review.createdAtTimestamp).toISOString(),
          author: {
            '@type': 'Person',
            name: review.authorName,
          },
        };

        if (bestRating) {
          reviewSchemaMarkup.reviewRating.bestRating = bestRating;
        }

        if (worstRating) {
          reviewSchemaMarkup.reviewRating.worstRating = worstRating;
        }

        if (review.authorEmail) {
          reviewSchemaMarkup.author.email = review.authorEmail;
        }

        return reviewSchemaMarkup;
      }
    );
  }

  return (
    <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
  );
};

export default ProductSchema;
