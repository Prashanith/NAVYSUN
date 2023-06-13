import { useId } from "react";
import { IProduct } from "./products";

function Product({ name, description, imagePath }: IProduct) {
  const id = useId();

  function getRandomColor() {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  }
  return (
    <div className="flex flex-col justify-center items-start carousel-item  w-64  py-8 mr-8 ">
      <img
        src={imagePath}
        className={` h-80 bg-[${getRandomColor()}] bg-[#ececec]  rounded-xl px-10`}
        id={id + imagePath}
      />
      <p className="text-lg font-semibold mt-6 px-4">{name}</p>
      <p className="text-sm font-light mt-3 px-4">
        {description.length > 0
          ? description
          : "The Products is very usefull bro buy it "}
      </p>
    </div>
  );
}

export default Product;
