import { useDispatch, useSelector } from "react-redux";
import NavTitle from "./NavTitle";
import { toggleCategory } from "../../../../redux/orebiSlice";
import { useState } from "react";

function Category() {
  const [showSubCatOne, setShowSubCatOne] = useState(false);

  const checkedCategorys = useSelector(
    (state) => state.orebiReducer.checkedCategorys
  );

  const category = [
    {
      _id: 9006,
      title: "Watch",
    },
    {
      _id: 9007,
      title: "Speaker",
    },
    {
      _id: 9008,
      title: "Camera",
    },
    {
      _id: 9009,
      title: "Phones",
    },
  ];

  const dispatch = useDispatch();

  const handleToggleCategory = (category) => {
    dispatch(toggleCategory(category));
  };

  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={true} />
      <div>
        <ul className="flex-flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {category.map((item) => {
            return (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#f0f0f0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              >
                <input
                  type="checkbox"
                  id={item._id}
                  checked={checkedCategorys.some((b) => b._id === item._id)}
                  onChange={() => handleToggleCategory(item)}
                />
                {item.title}
                {item.icons && (
                  <span
                    onClick={() => setShowSubCatOne(!showSubCatOne)}
                    className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Category;
