import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Flex from "../../designLayouts/Flex";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HeaderBottom() {
  const products = useSelector((state) => state.orebiReducer.products);
  const [showCategory, setShowCategory] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const categoryRef = useRef();

  const handleMouseEnterCategory = () => {
    setShowCategory(true);
  };

  const handleMouseLeaveCategory = (e) => {
    if (!categoryRef.current.contains(e.relatedTarget)) {
      setShowCategory(false);
    }
  };

  // const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  return (
    <div className="w-full bg-[#f5f5f3] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div
            onMouseEnter={handleMouseEnterCategory}
            onMouseLeave={handleMouseLeaveCategory}
            ref={categoryRef}
            className="flex h-14 pr-36 cursor-pointer items-center gap-2 text-primeColor relative"
          >
            <i className="fa-solid fa-bars text-base"></i>
            <p className="text-[15px] font-normal">Category</p>

            {showCategory && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-14 left-0 z-50 bg-primeColor w-[240px] text-[#767676] h-auto p-4 pb-6"
                onMouseEnter={() => setShowCategory(true)}
                onMouseLeave={handleMouseLeaveCategory}
              >
                <Link to={"category/imprimante"}>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Watch
                  </li>
                </Link>
                <Link to={"category/ancre"}>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Speaker
                  </li>
                </Link>
                <Link to={"category/Ruban"}>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Camera
                  </li>
                </Link>
                <Link to={"category/Bac"}>
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Phone
                  </li>
                </Link>
              </motion.ul>
            )}
          </div>
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              placeholder="Search"
            />
            <i className="fa-solid fa-magnifying-glass text-base"></i>
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div onClick={() => setShowUser(!showUser)} className="flex">
              <i className="fa-solid fa-user"></i>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
              >
                <Link to="/signin">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer ">
                    Login
                  </li>
                </Link>
                <Link to="/signup">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer ">
                    Sign Up
                  </li>
                </Link>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Profile
                </li>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Others
                </li>
              </motion.ul>
            )}
            <Link to="/cart">
              <div className="relative">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="absolute font-titleFont top-[-8px] right-[-8px] text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link>
            <i className="fa-solid fa-heart"></i>
          </div>
        </Flex>
      </div>
    </div>
  );
}

export default HeaderBottom;
