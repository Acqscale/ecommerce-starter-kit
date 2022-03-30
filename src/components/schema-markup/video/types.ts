export type VideoSchemaMarkup = {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  thumbnailUrl: string[];
  uploadDate: string;
  contentUrl?: string;
  duration?: string;
  embedUrl?: string;
};
