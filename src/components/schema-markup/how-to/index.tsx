import { FunctionComponent } from 'react';

import { HowToSchemaMarkup, HowToStepSchemaMarkup } from './types';

type HowToStepProps = {
  text: string;
  name?: string;
  url?: string;
  imageUrl?: string;
};

type HowToSchemaProps = {
  name: string;
  steps: HowToStepProps[];
  imageUrl?: string;
};

const HowToSchema: FunctionComponent<HowToSchemaProps> = ({
  name,
  steps,
  imageUrl,
}) => {
  const howToSchema: HowToSchemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    step: [],
  };

  howToSchema.step = steps.map(
    (step: HowToStepProps): HowToStepSchemaMarkup => {
      const howToStepSchemaMarkup: HowToStepSchemaMarkup = {
        '@type': 'HowToStep',
        text: step.text,
      };

      if (step.name) {
        howToStepSchemaMarkup.name = step.name;
      }

      if (step.url) {
        howToStepSchemaMarkup.url = step.url;
      }

      if (step.imageUrl) {
        howToStepSchemaMarkup.image = step.imageUrl;
      }

      return howToStepSchemaMarkup;
    }
  );

  if (imageUrl) {
    howToSchema.image = imageUrl;
  }

  return (
    <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
  );
};

export default HowToSchema;
