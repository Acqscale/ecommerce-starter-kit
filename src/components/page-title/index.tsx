import { FunctionComponent } from 'react';

const PageTitle: FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <h1 className="mx-4 text-3xl font-normal leading-10 md:text-center text-secondary">
      {title}
    </h1>
  );
};

export default PageTitle;
