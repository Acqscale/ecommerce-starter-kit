import { Dispatch, FunctionComponent, SetStateAction } from 'react';

import Button from '../ui/button';
import Input from '../ui/input';
import styles from './index.module.scss';

type NotifyLaunchingProps = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
};

const NotifyLaunching: FunctionComponent<NotifyLaunchingProps> = ({
  email,
  setEmail,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Get notified when we’re launching</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>
      <div className={styles.notify}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Enter your email"
          classes="text-center mb-3 rounded-lg h-[52px] md:text-left md:w-full"
        />
        <Button classes="bg-white text-primary w-full h-[52px] md:w-auto">
          Notify me
        </Button>
      </div>
    </div>
  );
};

export default NotifyLaunching;
