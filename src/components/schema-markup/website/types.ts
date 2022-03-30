import { EntryPointSchemaMarkup } from '@/components/schema-markup/types';

export type SearchActionSchemaMarkup = {
  '@type': string;
  target: EntryPointSchemaMarkup;
  'query-input': string;
};

export type WebsiteSchemaMarkup = {
  '@context': string;
  '@type': string;
  url: string;
  potentialAction: SearchActionSchemaMarkup[];
};
