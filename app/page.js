import Image from "next/image";

import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

import { productData, productGallery } from "@/data";
import ProductCard from "@/components/ProductCard";
import GalleryCard from "@/components/GalleryCard";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto">
        <div className="flex flex-col-reverse items-center justify-center py-32 lg:flex-row md:px-24">
          <div className="w-full flex flex-col items-center justify-center lg:items-start lg:text-left lg:w-1/2">
            <h3 className="text-3xl font-[300] mt-16 md:text-4xl md:mt-8 xl:text-5xl">
              Modern Technology
            </h3>
            <h2 className="text-[90px] tracking-wide leading-[120px] -ml-2 font-semibold lg:text-[150px] lg:leading-[150px]">
              Drone
            </h2>
            <p className="text-[#606060] max-w-xs text-center lg:text-left lg:max-w-md py-5">
              Visual artists use drones to capture beautiful new images and
              camera angles.
            </p>
            <Button>View More</Button>
          </div>
          <div className="w-full flex items-center justify-center lg:w-1/2">
            <Image
              src="/assets/drone.png"
              width={500}
              height={500}
              alt="drone"
              className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[800px]"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#ededed] ">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center px-4 py-24 lg:flex-row lg:px-24">
            <div className="w-full flex flex-col items-center mb-16 md:items-start lg:w-1/2">
              <h2 className="text-4xl text-center font-semibold my-5 md:text-5xl md:text-left">
                About <span className="text-[#db7858]">Us</span>
              </h2>
              <p className="text-[#606060] text-sm text-center sm:text-lg md:text-left">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                Morbi accumsan ipsum velit. Sed non neque elit. Sed ut imperdiet
                nisi.
              </p>
              <p className="text-[#606060] my-5 text-sm text-center sm:text-lg md:text-left">
                Proin condimentum fermentum nunc. Etiam pharetra, erat sed
                fermentum feugiat, velit mauris egestas quam, ut aliquam massa
                nisl quis neque. Suspendisse in orci enim. Sed non mauris vitae
                erat consequat auctor eu in elit.
              </p>
              <Button>Read More</Button>
            </div>
            <div className="w-full flex items-center justify-center md:w-1/2">
              <Image
                src="/assets/about.png"
                alt="About"
                width={300}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="container mx-auto py-32">
        {/* Product Fields */}
        <div className="flex flex-col py-16 px-5 lg:px-24">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-semibold md:text-5xl">
              Explore Products in Different Fields
            </h2>
            <p className="my-5 max-w-4xl text-xs text-[#606060] sm:text-sm">
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Mauris in erat justo. Nullam ac urna eu felis
              dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
              imperdiet nisi.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-3">
              {productData.map((product, idx) => {
                return <ProductCard key={idx} product={product} />;
              })}
            </div>
          </div>
        </div>

        {/* Gallery Fields */}
        <div className="flex items-center justify-center px-5 lg:px-24">
          <div className="grid gap-5 grid-cols-3 grid-rows-2">
            {productGallery.map((product, idx) => {
              return (
                <GalleryCard
                  key={idx}
                  title={product.title}
                  img={product.img}
                  isInMiddle={product.isInMiddle}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
