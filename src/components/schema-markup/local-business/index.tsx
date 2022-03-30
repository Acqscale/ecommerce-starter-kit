import { FunctionComponent } from 'react';

import { LocalBusinessSchemaMarkup } from './types';

type LocalBusinessProps = {
  name: string;
  addressCountry: string;
  postalCode: string;
  addressRegion: string;
  streetAddress: string;
  latitude?: number;
  longitude?: number;
  priceRange?: string;
  telephone?: string;
  url?: string;
};

const LocalBusinessSchema: FunctionComponent<LocalBusinessProps> = ({
  name,
  addressCountry,
  addressRegion,
  postalCode,
  streetAddress,
  latitude,
  longitude,
  priceRange,
  telephone,
  url,
}) => {
  const localBusinessSchema: LocalBusinessSchemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    address: {
      '@type': 'PostalAddress',
      addressCountry,
      addressRegion,
      postalCode,
      streetAddress,
    },
  };

  if (latitude && longitude) {
    localBusinessSchema.geo = {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    };
  }

  if (priceRange) {
    localBusinessSchema.priceRange = priceRange;
  }

  if (telephone) {
    localBusinessSchema.telephone = telephone;
  }

  if (url) {
    localBusinessSchema.url = url;
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(localBusinessSchema)}
    </script>
  );
};

export default LocalBusinessSchema;
