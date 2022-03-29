import { FunctionComponent } from 'react';

const PageTitle: FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-on-background">
      {title}
    </h1>
  );
};

export default PageTitle;
