import { Link } from "react-router-dom";
import Image from "../../components/designLayouts/Image";
import Slider from "react-slick";
import { useState } from "react";
import { sliderOne, sliderTwo, sliderThree } from "../../assets/images";

const CustomSlice = ({ subtext, imgSrc, text, buttonLink, buttonText }) => {
  return (
    <div className="relative bg-[#f5f5f3] flex flex-col lg:flex-row justify-center items-center py-10 lg:py-0">
      <div className="max-w-lg lg:max-w-xs xl:max-w-md mr-0 lg:mr-24 mb-8 lg:mb-0 text-center lg:text-left lg:px-4">
        <h1 className="mb-4 text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
          {text}
        </h1>
        <p className="mb-6 text-lg lg:text-xl text-gray-600">{subtext}</p>

        <Link to={buttonLink}>
          <button className="bg-[#0167F3] text-white text-lg font-bodyFont w-40 h-12 hover:bg-black duration-300 font-bold">
            {buttonText}
          </button>
        </Link>
      </div>
      <div className="w-full lg:w-auto lg:ml-24">
        <Image imgSrc={imgSrc} />
      </div>
    </div>
  );
};

function Banner() {
  const [dotActive, setDotActive] = useState(0);
  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px solid #262626",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0" }}>{dots}</ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px solid #262626",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px solid white",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: sliderOne,
      text: "Grab Upto 50% Off On Selected Headphone",
      Subtext:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cupiditate modi amet! Facilis, aperiam quaerat.",
      buttonClick: "/offer",
      buttonText: "Shop Now",
    },
    {
      imgSrc: sliderTwo,
      text: "New Arrival Smartphone",
      Subtext:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cupiditate modi amet! Facilis, aperiam quaerat.",
      buttonClick: "/shop",
      buttonText: "Shop Now",
    },
    {
      imgSrc: sliderThree,
      text: "Apple Watch 30% Off At your first Odder",
      Subtext:
        "Explore our premium printers and consumables for exceptional results",
      buttonClick: "/contact",
      buttonText: "Shop Now",
    },
  ];

  return (
    <div className="w-full bg-white">
      <Slider {...setting}>
        {slides.map((slide, index) => (
          <CustomSlice key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
