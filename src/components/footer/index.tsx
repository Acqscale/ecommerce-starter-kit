import { footerNavigation } from '@/mock-data/footer-navigation';

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-background">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="py-20 border-t border-border-color">
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:auto-rows-min md:gap-x-8 md:gap-y-16">
            {/* Image section */}
            <div className="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1">
              <img
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                alt=""
                className="w-auto h-8"
              />
            </div>

            {/* Sitemap sections */}
            <div className="grid grid-cols-2 col-span-6 gap-8 mt-10 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
              <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:col-span-2 sm:gap-x-8">
                <div>
                  <h3 className="text-sm font-medium text-on-background">
                    Products
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.products.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-on-background text-opacity-80 hover:text-opacity-60"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-on-background">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-on-background text-opacity-80 hover:text-opacity-60"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-on-background">
                  Customer Service
                </h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.customerService.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-on-background text-opacity-80 hover:text-opacity-60"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter section */}
            <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
              <h3 className="text-sm font-medium text-on-background">
                Sign up for our newsletter
              </h3>
              <p className="mt-6 text-sm text-on-background text-opacity-80">
                The latest deals and savings, sent to your inbox weekly.
              </p>
              <form className="flex mt-2 sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  required
                  className="py-2 px-4 w-full min-w-0 text-base rounded-md border focus:outline-none focus:ring-1 shadow-sm appearance-none text-on-background placeholder:text-on-background placeholder:text-opacity-80 bg-background border-border-color focus:border-primary focus:ring-primary"
                />
                <div className="shrink-0 ml-4">
                  <button
                    type="submit"
                    className="flex justify-center items-center py-2 px-4 w-full text-base font-medium rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm group-hover:opacity-80 text-on-secondary bg-secondary focus:ring-secondary"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="py-10 text-center border-t border-border-color">
          <p className="text-sm text-on-background text-opacity-80">
            &copy; 2022 Acqscale LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
