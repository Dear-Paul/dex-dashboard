import ActiveStar from '../icons/ActiveStar';
import InActiveStar from '../icons/InActiveStar';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const stars = Array.from({ length: totalStars }, (_, index) => <InActiveStar key={index} />);

  for (let i = 0; i < rating; i++) {
    stars[i] = <ActiveStar key={i} />;
  }

  return (
    <div className="flex items-center gap-1">
      {stars} <span className="text-xs text-rating">{`${rating} / ${totalStars}`}</span>
    </div>
  );
};

export default StarRating;
