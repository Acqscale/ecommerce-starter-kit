import { FunctionComponent } from 'react';

import { WebsiteSchemaMarkup } from './types';

type WebsiteSchemaProps = {
  url: string;
  searchUrl: string;
};

const WebsiteSchema: FunctionComponent<WebsiteSchemaProps> = ({
  url,
  searchUrl,
}) => {
  const websiteSchema: WebsiteSchemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url,
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${searchUrl}?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    ],
  };

  return (
    <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
  );
};

export default WebsiteSchema;
