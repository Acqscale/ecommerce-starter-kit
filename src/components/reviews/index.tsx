import ProductReview from './review-item';

export default function RecentReviewsSection() {
  const reviews = [
    {
      id: 1,
      author: 'Risako M',
      date: 'May 16, 2021',
      rating: 3.9,
      title: 'Can’t say enough good things',
      content:
        'I was really pleased with the overall shopping experience. My order even included a little personal, ' +
        'handwritten note, which delighted me!\n' +
        'The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! ' +
        'I would gladly recommend this store to my friends. And, now that I think of it.. I actually have, many time!',
    },
    {
      id: 2,
      author: 'Risako M',
      date: 'May 16, 2021',
      rating: 3.9,
      title: 'Can’t say enough good things',
      content:
        'I was really pleased with the overall shopping experience. My order even included a little personal, ' +
        'handwritten note, which delighted me!\n' +
        'The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! ' +
        'I would gladly recommend this store to my friends. And, now that I think of it.. I actually have, many time!',
    },
    {
      id: 3,
      author: 'Risako M',
      date: 'May 16, 2021',
      rating: 3.9,
      title: 'Can’t say enough good things',
      content:
        'I was really pleased with the overall shopping experience. My order even included a little personal, ' +
        'handwritten note, which delighted me!\n' +
        'The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! ' +
        'I would gladly recommend this store to my friends. And, now that I think of it.. I actually have, many time!',
    },
  ];

  return (
    <div
      className="py-6 px-4 mt-8 bg-[#f6f7f7] md:px-6 md:mt-16 lg:px-[8.5rem] lg:pt-16 lg:pb-10 lg:py-18"
      id="recentReviews"
    >
      <h3 className="text-3xl font-normal text-[#475958]">Recent reviews</h3>
      <div className="mt-6">
        {reviews.map((review) => {
          return <ProductReview key={review.id} review={review} />;
        })}
      </div>
    </div>
  );
}
