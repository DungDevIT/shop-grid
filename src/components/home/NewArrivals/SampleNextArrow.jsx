function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[35%] right-2"
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-right text-xl"></i>
    </div>
  );
}

export default SampleNextArrow;
