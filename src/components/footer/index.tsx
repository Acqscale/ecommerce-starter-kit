import { footerNavigation2 } from '@/mock-data/footer-navigation';

import styles from './index.module.css';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.content}>
          <div className={styles.social}>
            <img
              className={styles.logo}
              src="/assets/images/logo.svg"
              alt="Company logo"
            />
            <p className={styles.text}>
              UI Kits, Templates and Dashboards built on top of Tailwind,
              Vue.js, React, Angular, Node.js and Laravel. Join over{' '}
              <b>516,257</b>
              creatives to access all our products!
            </p>
            <div className={styles.outLinks}>
              {footerNavigation2.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={styles.socialItem}
                >
                  <span className="sr-only">{item.name}</span>
                  <img
                    src={item.icon}
                    alt={item.name}
                    className={styles.socialIcon}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12 md:col-start-1 md:col-end-3">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-black uppercase">
                  Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation2.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-secondary">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-black uppercase">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation2.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-secondary">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-black uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation2.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-secondary">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-black uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation2.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-secondary">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
        <div className="pt-8 mt-12 border-t border-black border-opacity-10">
          <p className="text-base md:text-center text-secondary">
            &copy; 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
