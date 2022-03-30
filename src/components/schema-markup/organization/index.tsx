import { FunctionComponent } from 'react';

import { OrganizationSchemaMarkup } from './types';

type OrganizationSchemaProps = {
  name: string;
  logoUrl: string;
  websiteUrl: string;
};

const OrganizationSchema: FunctionComponent<OrganizationSchemaProps> = ({
  name,
  logoUrl,
  websiteUrl,
}) => {
  const organizationSchema: OrganizationSchemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    logo: logoUrl,
    url: websiteUrl,
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(organizationSchema)}
    </script>
  );
};

export default OrganizationSchema;
