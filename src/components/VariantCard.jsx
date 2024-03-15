const VariantCard = ({ variant }) => {
  return (
    <section className="shadow-2xl flex flex-col  rounded-[10px] w-[227px] h-[200px] py-4 px-1 bg-white">
      <div className="h-1/2 ml-6">{variant.icon}</div>
      <div className="h-1/2 flex flex-col items-center font-semibold ">
        <h2 className={`${variant.textColor} text-4xl`}>{variant.numbers}</h2>
        <h5 className="text-base text-tertiary">{variant.title}</h5>
      </div>
    </section>
  );
};
export default VariantCard;
