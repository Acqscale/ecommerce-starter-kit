type AnswerSchemaMarkup = {
  '@type': string;
  text: string;
};

type QuestionSchemaMarkup = {
  '@type': string;
  /**
   * The full text of question
   */
  name: string;
  acceptedAnswer: AnswerSchemaMarkup;
};

export type FaqSchemaMarkup = {
  '@context': string;
  '@type': string;
  mainEntity: QuestionSchemaMarkup[];
};
