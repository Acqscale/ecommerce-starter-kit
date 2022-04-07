import { FunctionComponent } from 'react';

import styles from './styles.module.css';

type HighlightsProps = {
  data: {
    id: number | string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    placeholder: string;
  }[];
  inline?: boolean;
};

const Highlights: FunctionComponent<HighlightsProps> = ({
  data,
  inline = false,
}) => {
  return (
    <div className={`${styles.wrapper} ${inline ? styles.inline : ''}`}>
      {data.map(({ id, Icon, label, placeholder }) => (
        <div key={id}>
          <Icon className={styles.icon} />
          <h3 className={styles.label}>{label}</h3>
          <p className={styles.placeholder}>{placeholder}</p>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
