type PersonSchemaMarkup = {
  '@type': string;
  name: string;
  email?: string;
};

export type AggregateRatingSchemaMarkup = {
  '@type': string;
  ratingCount: bigint;
  reviewCount: bigint;
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
};

type ReviewRatingSchemaMarkup = {
  '@type': string;
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
};

export type ReviewSchemaMarkup = {
  '@type': string;
  name: string;
  reviewBody: string;
  reviewRating: ReviewRatingSchemaMarkup;
  datePublished: string;
  author: PersonSchemaMarkup;
};

export type EntryPointSchemaMarkup = {
  '@type': string;
  urlTemplate: string;
};
