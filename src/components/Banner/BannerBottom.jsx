function BannerBottom() {
  return (
    <div className="w-full bg-white pt-11 border-b-gray-200 px-4">
      <div className="max-w-container px-4 mx-auto h-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col justify-center items-center border-[1px] gap-2 w-72 p-10 shadow-sm hover:shadow-md duration-300">
          <i className="fa-solid fa-truck text-3xl text-[#0167F3]"></i>
          <p className="text-lightText text-base">Free Shipping</p>
          <span className="text-neutral-400 text-sm">On order over $99</span>
        </div>
        <div className="flex flex-col justify-center items-center border-[1px] gap-2 w-72 p-10 shadow-sm hover:shadow-md duration-300">
          <i className="fa-solid fa-headset text-3xl text-[#0167F3]"></i>
          <p className="text-lightText text-base">24/7 Support.</p>
          <span className="text-neutral-400 text-sm">Live Chat Or Call.</span>
        </div>
        <div className="flex flex-col justify-center items-center border-[1px] gap-2 w-72 p-10 shadow-sm hover:shadow-md duration-300">
          <i className="fa-solid fa-credit-card text-3xl text-[#0167F3]"></i>
          <p className="text-lightText text-base">Online Payment.</p>
          <span className="text-neutral-400 text-sm">
            Secure Payment Services.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center border-[1px] gap-2 w-72 p-10 shadow-sm hover:shadow-md duration-300">
          <i className="fa-solid fa-repeat text-3xl text-[#0167F3]"></i>
          <p className="text-lightText text-base">Easy Return.</p>
          <span className="text-neutral-400 text-sm">
            Hassle Free Shopping.
          </span>
        </div>
      </div>
    </div>
  );
}

export default BannerBottom;
