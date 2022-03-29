import { FunctionComponent } from 'react';

import { BreadcrumbSchemaMarkup, BreadcrumbItem } from './types';

type BreadcrumbItemProps = {
  url?: string;
  name: string;
  position: bigint;
};

type BreadcrumbSchemaProps = {
  items: BreadcrumbItemProps[];
};

const BreadcrumbSchema: FunctionComponent<BreadcrumbSchemaProps> = ({
  items,
}) => {
  const breadcrumbSchema: BreadcrumbSchemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [],
  };

  breadcrumbSchema.itemListElement = items.map(
    (item: BreadcrumbItemProps): BreadcrumbItem => {
      const breadcrumbItemSchema: BreadcrumbItem = {
        '@type': 'ListItem',
        name: item.name,
        position: item.position,
      };

      if (item.url) {
        breadcrumbItemSchema.item = item.url;
      }

      return breadcrumbItemSchema;
    }
  );

  return (
    <script type="application/ld+json">
      {JSON.stringify(breadcrumbSchema)}
    </script>
  );
};

export default BreadcrumbSchema;
