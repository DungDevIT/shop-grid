import { useState } from "react";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../../../redux/orebiSlice";
import StarRatings from "react-star-ratings";

function Product(props) {
  const dispatch = useDispatch();
  const _id = props.productName;

  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };

  const rootId = idString(_id);
  const [wishList, setWishList] = useState([]);
  const navigate = useNavigate();
  const productItem = props;

  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, { state: productItem });
  };

  const handleWishList = () => {
    toast.success("Product add to wish List");
    setWishList(wishList.push(props));
    console.log(wishList);
  };

  return (
    <div className="w-full relative group mx-auto">
      <div className="relative overflow-y-hidden flex flex-col">
        <div onClick={handleProductDetails}>
          <Image className="w-full h-full" imgSrc={props.img} />
        </div>
        <div className="absolute top-6 left-8">
          {props.badge && <Badge text="New" />}
        </div>
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-center justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    name: props.productName,
                    quantity: 1,
                    image: props.img,
                    badge: props.badge,
                    price: props.price,
                    colors: props.des,
                    rating: props.stars,
                    count: props.count,
                  })
                )
              }
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Cart
              <i className="fa-solid fa-cart-shopping text-xl"></i>
            </li>
            <li
              onClick={handleProductDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Detail
              <i className="fa-solid fa-eye text-xl"></i>
            </li>
            <li
              onClick={handleWishList}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Wish List
              <i className="fa-solid fa-heart"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont ">
          <h2 className="text-lg text-primeColor font-bold truncate">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-[14px] ">${props.price}</p>
        </div>
        <div className="flex items-center font-titleFont ">
          <StarRatings
            rating={props.stars}
            starDimension="14px"
            starSpacing="0"
            starRatedColor="#fecb00"
          />
          <p className="text-[#767676] text-[14px] px-3 pt-1">
            {props.count} Review(s)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
