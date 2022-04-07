import { FunctionComponent } from 'react';

type AdvertisingProps = {
  message: string;
};

const Advertising: FunctionComponent<AdvertisingProps> = ({ message }) => {
  return (
    <div className="p-2 w-full font-medium text-center bg-primary text-on-primary">
      {message}
    </div>
  );
};

export default Advertising;
