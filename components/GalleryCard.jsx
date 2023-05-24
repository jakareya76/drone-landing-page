import Image from "next/image";
import CardHover from "./CardHover";

const GalleryCard = ({ title, img, isInMiddle }) => {
  return (
    <div
      className={`relative group overflow-hidden bg-no-repeat bg-center w-[300px] ${
        isInMiddle
          ? "h-[240px] col-span-1 row-span-1"
          : "h-[500px] col-span-1 row-span-2"
      } `}
      style={{ backgroundImage: `url(${img})` }}
    >
      <CardHover title={title} />
    </div>
  );
};
export default GalleryCard;
