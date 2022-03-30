import { FunctionComponent } from 'react';

import { FaqSchemaMarkup } from '@/components/schema-markup/faq/types';

type FaqQuestionProps = {
  question: string;
  answer: string;
};

type FaqSchemaProps = {
  questions: FaqQuestionProps[];
};

const FaqSchema: FunctionComponent<FaqSchemaProps> = ({ questions }) => {
  const faqSchema: FaqSchemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [],
  };

  faqSchema.mainEntity = questions.map((question: FaqQuestionProps) => {
    return {
      '@type': 'Question',
      name: question.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: question.answer,
      },
    };
  });

  return (
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
  );
};

export default FaqSchema;
