import { AggregateRatingSchemaMarkup, ReviewSchemaMarkup } from '../types';

type OpeningHoursSpecificationSchemaMarkup = {
  '@type': string;
  /**
   * The time the business location closes, in hh:mm:ss format.
   */
  closes: string;
  dayOfWeek: string[];
  /**
   * The time the business location opens, in hh:mm:ss format.
   */
  opens: string;
};

type GeoCoordinatesSchemaMarkup = {
  '@type': string;
  latitude: number;
  longitude: number;
};

type PostalAddressSchemaMarkup = {
  '@type': string;
  /**
   * The two-letter ISO 3166-1 alpha-2 country code
   */
  addressCountry: string;
  addressRegion: string;
  addressLocality?: string;
  postalCode: string;
  streetAddress: string;
};

export type LocalBusinessSchemaMarkup = {
  '@context': string;
  '@type': string;
  name: string;
  address: PostalAddressSchemaMarkup;
  /**
   * The relative price range of a business, either a numerical range (for example, "$10-15") or a normalized number of
   * currency signs (for example, "$$$"). Must be shorter than 100 characters.
   */
  priceRange?: string;
  /**
   * A business phone number which should include the country code and area code in the phone number.
   */
  telephone?: string;
  url?: string;
  aggregateRating?: AggregateRatingSchemaMarkup;
  geo?: GeoCoordinatesSchemaMarkup;
  openingHoursSpecification?: OpeningHoursSpecificationSchemaMarkup;
  review?: ReviewSchemaMarkup;
};
