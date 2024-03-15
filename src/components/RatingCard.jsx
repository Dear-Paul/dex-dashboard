import StarRating from './StarRating';

const RatingCard = ({ ratings, title }) => {
  return (
    <section className="flex items-center flex-col rounded-lg w-[341px] h-[310px] bg-white py-3 px-2 shadow-lg">
      <h4 className="text-xl font-medium text-[#6A6B6D]">{title}</h4>
      <div className="mt-4 flex w-[297px] flex-col gap-4">
        {ratings.map((rating, i) => (
          <div
            key={i}
            className={`flex text-xs font-medium items-center ${!rating.role && 'justify-between'}`}>
            <span className="flex items-center gap-2 w-[40%]">
              <img src={rating.placeholderImg} /> {rating.name}
            </span>
            <span className="w-1/4 text-[#808080]">{rating.role ?? rating.role}</span>
            <StarRating rating={rating.rating} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default RatingCard;
