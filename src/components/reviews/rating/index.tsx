import { StarIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

export default function ProductRating({ rating, starsFirst, className }: any) {
  return (
    <div
      className={classNames('flex gap-x-3 flex-row items-center', className)}
    >
      <div
        className={classNames(
          'text-[#1F2A37] font-medium text-sm',
          starsFirst ? 'order-2' : 'order-1'
        )}
      >
        {rating}
      </div>
      <div
        className={classNames(
          'flex items-center',
          starsFirst ? 'order-1' : 'order-2'
        )}
      >
        {[0, 1, 2, 3, 4].map((ratingItem) => (
          <StarIcon
            key={ratingItem}
            className={classNames(
              rating > ratingItem ? 'text-[#F2C04A]' : 'text-[#0F1A1E]/20',
              'h-5 w-5 flex-shrink-0'
            )}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
