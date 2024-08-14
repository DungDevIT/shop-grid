import Slider from "react-slick";
import {
  newArrFive,
  newArrFour,
  newArrOne,
  newArrThree,
  newArrTwo,
} from "../../../assets/images";
import Product from "../../home/Products/Product";
import Heading from "../../home/Products/Heading";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

function NewArrivals() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Xiaomi Mi Band 5"
            price="199.00"
            color="Black"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            stars={4}
            count={4}
          />
        </div>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrTwo}
            productName="Big Power Sound Speaker"
            price="275.00"
            color="Black"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            stars={4}
            count={4}
          />
        </div>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrThree}
            productName="WiFi Security Camera"
            price="399.00"
            color="Black"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            stars={4}
            count={4}
          />
        </div>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrFour}
            productName="iphone 6x plus"
            price="400.00"
            color="Black"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            stars={4}
            count={4}
          />
        </div>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrFive}
            productName="Wireless Headphones"
            price="350.00"
            color="Black"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            stars={4}
            count={4}
          />
        </div>
      </Slider>
    </div>
  );
}

export default NewArrivals;
