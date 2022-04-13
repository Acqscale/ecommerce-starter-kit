import { FunctionComponent } from 'react';

import { ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';

import styles from '../index.module.scss';

export type BreadCrumbItemProps = {
  id: number | string;
  name: string;
  link: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  active: boolean;
};

const BreadCrumbItem: FunctionComponent<BreadCrumbItemProps> = ({
  name,
  link,
  Icon,
  active,
}) => {
  return (
    <li className={styles.item}>
      {Icon ? (
        <Icon className={styles.icon} />
      ) : (
        <ChevronRightIcon className={`${styles.icon} ${styles.arrow}`} />
      )}
      <Link href={link}>
        <a className={`${styles.link} ${active ? styles.active : ''}`}>
          {name}
        </a>
      </Link>
    </li>
  );
};

export default BreadCrumbItem;
