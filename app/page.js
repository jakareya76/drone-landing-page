import Image from "next/image";

import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";

import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

import { productData, productGallery, articleData, iconList } from "@/data";
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
          <div className="grid gap-5 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3">
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

      {/* Article Section */}
      <section className="bg-[#ededed]">
        <div className="container mx-auto py-32">
          <div className="flex flex-col py-16 px-5 lg:px-24">
            <h2 className="text-4xl mb-5 md:text-5xl">Latest Article</h2>
            <div className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-3">
              {articleData.map((article, idx) => {
                return <ProductCard key={idx} product={article} />;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto">
        <div className="flex flex-col items-center justify-center px-4 py-24 lg:flex-row lg:px-24">
          <div className="w-full flex flex-col items-center mb-16 md:items-start lg:w-1/2">
            <h2 className="text-4xl text-center md:text-5xl md:text-left">
              Subscribe <span className="text-[#db7858]">Us</span>
            </h2>
            <p className="text-[#484848] my-5 text-lg text-center font-semibold md:text-left">
              Subscribe My Newsletter For All Offers & Latest News.
            </p>
            <p className="text-[#606060] text-md text-center md:text-left">
              A pellentesque pretium feugiat vel morbi sagittis lorem habitasse
              cursus. Suspendisse tempus rhoncus enim pellentesque est in neque,
              elit mattis vehicula vitae eget. Viverra imperdiet felis
              sollicitudin tesque cursus sit.
            </p>
            <div className="flex flex-col items-start justify-center my-5 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email addresss"
                className="px-8 py-2 bg-[#ededed] focus:outline-none"
              />
              <button className="w-full px-5 py-2 text-white  bg-[#db7858]">
                Subscribe
              </button>
            </div>
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
      </section>

      {/* Icons Section */}
      <section className="bg-[#ededed]">
        <div className="container mx-auto py-24 px-5 lg:px-24">
          <div className="grid grid-cols-1 place-items-center gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {iconList.map((item) => {
              return (
                <div className="flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={40}
                    height={40}
                    className="w-[80px] h-[80px] "
                  />

                  <div className="w-full h-full flex flex-col px-8">
                    <h2 className="text-2xl text-center my-4">{item.title}</h2>
                    <button className="bg-zinc-900 text-white px-8 py-2 mt-2">
                      Read More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-5 lg:px-24">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-16 py-24 text-center md:text-left md:grid-cols-4">
            <div className="flex flex-col">
              <h3 className="text-xl">Product Categories</h3>
              <p className="text-sm text-[#606060] py-2">Consumer</p>
              <p className="text-sm text-[#606060] py-2">Professional</p>
              <p className="text-sm text-[#606060] py-2">Enterprise</p>
              <p className="text-sm text-[#606060] py-2">Components</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl">Where to Buy</h3>
              <p className="text-sm text-[#606060] py-2">Consumer</p>
              <p className="text-sm text-[#606060] py-2">Professional</p>
              <p className="text-sm text-[#606060] py-2">Consumer</p>
              <p className="text-sm text-[#606060] py-2">Consumer</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl">Quick Links</h3>
              <p className="text-sm text-[#606060] py-2">Who we are</p>
              <p className="text-sm text-[#606060] py-2">Contact us</p>
              <p className="text-sm text-[#606060] py-2">Careers</p>
              <p className="text-sm text-[#606060] py-2">Dealer Portal</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl">Service Plan</h3>
              <p className="text-sm text-[#606060] py-2">Consumer</p>
              <p className="text-sm text-[#606060] py-2">Professional</p>
              <p className="text-sm text-[#606060] py-2">Enterprise</p>
              <p className="text-sm text-[#606060] py-2">Components</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between py-8 sm:flex-row">
          <p className="text-sm text-[#606060] text-center sm:text-left">
            Copyright © 2022 Templates Jungle Rights Reserved. Feedback on web
            experience
          </p>
          <div className="flex items-center gap-5 mt-2">
            <BsTwitter color="#606060" />
            <AiOutlineGooglePlus color="#606060" />
            <BsLinkedin color="#606060" />
          </div>
        </div>
      </footer>
    </>
  );
};
export default Home;
