import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerFour,
  bestSellerOne,
  bestSellerThree,
  bestSellerTwo,
} from "../../../assets/images";

function BestSellers() {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="100001"
          img={bestSellerOne}
          productName="Xiaomi Mi Band 5"
          price="44.00"
          color="Black and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          stars={5}
          count={5}
        />
        <Product
          _id="100001"
          img={bestSellerTwo}
          productName="Xiaomi Mi Band 5"
          price="44.00"
          color="Black and White"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          stars={5}
          count={5}
        />
        <Product
          _id="100001"
          img={bestSellerThree}
          productName="Xiaomi Mi Band 5"
          price="44.00"
          color="Black and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          stars={5}
          count={5}
        />
        <Product
          _id="100001"
          img={bestSellerFour}
          productName="Xiaomi Mi Band 5"
          price="44.00"
          color="Black and White"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          stars={5}
          count={5}
        />
      </div>
    </div>
  );
}

export default BestSellers;
