// import { Link } from "react-router-dom";
import { bannerOne, bannerTwo } from "../../../assets/images/index";
import Image from "../../../components/designLayouts/Image";
import ShopNow from "../../../components/designLayouts/ShopNow/ShopNow";

function Sale() {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="w-full md:w-1/2 h-auto flex flex-col items-start relative">
        <div className="w-full mb-4">
          <Image className="w-full h-full object-cover" imgSrc={bannerOne} />
        </div>
        <div className="text-left w-full mx-4 absolute top-1/2 left-6 transform -translate-y-1/2 flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Smart Watch 2.0
          </h2>
          <p className="text-sm md:text-md lg:text-lg mb-2">
            Space Gray Aluminium Case with <br /> Black/Volt Real Sport Band
          </p>
          <ShopNow />
        </div>
      </div>

      <div className="w-full md:w-1/2 h-auto flex flex-col items-start relative">
        <div className="w-full mb-4">
          <Image
            className="w-full h-full object-cover"
            imgSrc={bannerTwo}
            alt="Smart Headphone"
          />
        </div>
        <div className="text-left w-full mx-4 absolute top-1/2 left-6 transform -translate-y-1/2 flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Smart Headphone
          </h2>
          <p className="text-sm md:text-md lg:text-lg mb-2">
            Lorem ipsum dolor sit amet, <br /> eiusmod tempor incididunt ut
            labore.
          </p>
          <ShopNow />
        </div>
      </div>
    </div>
  );
}

export default Sale;
