export type HowToStepSchemaMarkup = {
  '@type': string;
  text: string;
  name?: string;
  url?: string;
  image?: string;
};

export type HowToSchemaMarkup = {
  '@context': string;
  '@type': string;
  name: string;
  step: HowToStepSchemaMarkup[];
  image?: string;
};
