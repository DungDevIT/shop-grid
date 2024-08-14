import { Link } from "react-router-dom";
import ShopNow from "../../designLayouts/ShopNow/ShopNow";

function YearProduct() {
  return (
    <Link to="/shop">
      <div className="w-full h-80 mb-20 bg-[#f3f3f3] font-titleFont">
        <div className="w-full h-80 text-primeColor flex flex-col gap-4 justify-center items-center">
          <h1 className="text-3xl font-semibold">Product Of The Year</h1>
          <p className="text-base font-normal text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cupiditate modi amet! Facilis, aperiam quaerat.
          </p>
          <ShopNow />
        </div>
      </div>
    </Link>
  );
}

export default YearProduct;
