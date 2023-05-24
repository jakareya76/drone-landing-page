const CardHover = ({ title }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#000000b6] absolute top-0 left-[-100%] duration-300 group-hover:left-[0%]">
      <h3 className="text-2xl text-white capitalize">{title}</h3>
      <div className="w-full flex items-center justify-center gap-2 mt-5">
        <button className="bg-white text-black px-5 py-2 bordertext-sm">
          Learn More
        </button>
        <button className="text-white px-5 py-2 border text-sm">
          Purchase Now
        </button>
      </div>
    </div>
  );
};
export default CardHover;
