import { FunctionComponent, useCallback, useState } from 'react';

import Button from '../ui/button';

type CarouselProps = {
  data: {
    id: number | string;
    imgSrc: string;
    imgAlt: string;
    label?: string;
    placeholder?: string;
  }[];
};

const Carousel: FunctionComponent<CarouselProps> = ({ data }) => {
  const [active, setActive] = useState<number>(0);

  const handleSlide = useCallback(
    (direction: string) => {
      if (direction === 'next' && active < data.length - 1) {
        setActive(active + 1);
      } else if (direction === 'prev' && active > 0) {
        setActive(active - 1);
      }
    },
    [active, data]
  );

  return (
    <div
      id="carouselExampleCaptions"
      className="relative carousel slide"
      data-bs-ride="carousel"
    >
      <div className="overflow-hidden relative w-full carousel-inner">
        <div className="flex absolute inset-x-0 bottom-0 justify-center p-0 mb-4 carousel-indicators">
          {data.map((item, index) => (
            <button
              key={item.id}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className={active === index ? 'active' : ''}
              aria-current={active === index ? 'true' : 'false'}
              aria-label={`Slide ${item.id}`}
              onClick={() => setActive(index)}
            ></button>
          ))}
        </div>
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`relative w-full carousel-item h-[420px] md:h-[550px] ${
              active === index ? 'active' : ''
            }`}
          >
            <img
              src={item.imgSrc}
              className="block object-cover w-full min-w-full h-full min-h-full lg:object-top"
              alt={item.imgAlt}
            />
            {item.label && item.placeholder && (
              <div className="flex absolute inset-y-0 flex-col justify-center items-center mx-auto w-3/4 md:w-3/5 lg:items-start lg:mx-0 lg:max-w-[420px] carousel-caption">
                <h5 className="text-4xl leading-[3.5rem] text-center lg:text-left">
                  {item.label}
                </h5>
                <p className="pt-1 pb-7 text-lg leading-7 text-center lg:text-left">
                  {item.placeholder}
                </p>
                <div>
                  <Button
                    onClick={() => {}}
                    variant="contained"
                    size="medium"
                    color="primary"
                  >
                    Start Shopping
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="flex absolute inset-y-0 left-0 justify-center items-center p-0 text-center hover:no-underline focus:no-underline border-0 hover:outline-none focus:outline-none carousel-control-prev"
        type="button"
        onClick={() => handleSlide('prev')}
        disabled={active === 0}
      >
        <span
          className="inline-block bg-no-repeat carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="flex absolute inset-y-0 right-0 justify-center items-center p-0 text-center hover:no-underline focus:no-underline border-0 hover:outline-none focus:outline-none carousel-control-next"
        type="button"
        onClick={() => handleSlide('next')}
        disabled={active === data.length - 1}
      >
        <span
          className="inline-block bg-no-repeat carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
