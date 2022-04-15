import ProductRating from '../rating';

export default function ProductReview({ review }: any) {
  return (
    <div
      className={
        'flex flex-col py-6 border-t lg:grid lg:grid-cols-3 lg:items-start border-[#475958]/10'
      }
    >
      <div className="flex flex-row gap-x-4 items-center text-lg font-medium lg:flex-col lg:gap-x-0 lg:items-start">
        <span className="text-[#111928]">{review.author}</span>
        <span className="text-[#475958]">{review.date}</span>
      </div>
      <ProductRating
        rating={review.rating}
        starsFirst={true}
        className={'mt-4 lg:mt-0'}
      />
      <div className="flex flex-col gap-x-3 mt-10 text-lg lg:mt-0">
        <span className="font-medium text-[#111928]">{review.title}</span>
        <p className="mt-2.5 font-medium leading-6 text-[#475958]">
          {review.content}
        </p>
      </div>
    </div>
  );
}
