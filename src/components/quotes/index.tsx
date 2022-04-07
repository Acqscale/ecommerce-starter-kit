import { FunctionComponent } from 'react';

import styles from './index.module.css';

type QuotesProps = {
  data: {
    id: number | string;
    author: string;
    picture: string;
    position: string;
    text: string;
  }[];
};

const Quotes: FunctionComponent<QuotesProps> = ({ data = [] }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        {data.map(({ id, author, picture, position, text }) => (
          <div key={id} className={styles.quote}>
            <img
              className={styles.quoteIcon}
              src="/assets/images/quote.svg"
              alt="quotes"
            />
            <p className={styles.quoteText}>{text}</p>
            <div className={styles.author}>
              <img className={styles.picture} src={picture} alt={author} />
              <div>
                <div className={styles.name}>{author}</div>
                <div className={styles.position}>{position}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
