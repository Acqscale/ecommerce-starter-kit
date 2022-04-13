import { FunctionComponent } from 'react';

import BreadCrumbItem, { BreadCrumbItemProps } from './BreadCrumbItem';
import styles from './index.module.scss';

type BreadCrumbsProps = {
  data: BreadCrumbItemProps[];
};

const BreadCrumbs: FunctionComponent<BreadCrumbsProps> = ({ data }) => {
  return (
    <nav className={styles.wrapper}>
      <ol className={styles.list}>
        {data.map((breadCrumbItem) => {
          return (
            <BreadCrumbItem
              key={breadCrumbItem.id}
              id={breadCrumbItem.id}
              Icon={breadCrumbItem.Icon}
              name={breadCrumbItem.name}
              link={breadCrumbItem?.link}
              active={breadCrumbItem.active}
            />
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
