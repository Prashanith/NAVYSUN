import React from "react";
import Product from "./product";

interface IProduct {
  name: string;
  description: string;
  imagePath: string;
}

const products: IProduct[] = [
  {
    name: "OMNI GEL",
    description: "",
    imagePath: "./med1.svg",
  },
  {
    name: "VOLINI",
    description: "",
    imagePath: "./med2.svg",
  },
  {
    name: "VIPER 60",
    description: "",
    imagePath: "./med3.svg",
  },
  {
    name: "GOAL 360",
    description: "",
    imagePath: "./med4.svg",
  },
  {
    name: "OMNI GEL",
    description: "",
    imagePath: "./med1.svg",
  },
  {
    name: "VOLINI",
    description: "",
    imagePath: "./med2.svg",
  },
  {
    name: "VIPER 60",
    description: "",
    imagePath: "./med3.svg",
  },
  {
    name: "GOAL 360",
    description: "",
    imagePath: "./med4.svg",
  },
];

function Products() {
  return (
    <div id="products" className="flex flex-col pagePadding componentSpacing justify-center bg-white">
      <div className="font-bold text-4xl lg:text-5xl">
        <p>PRODUCTS</p>
      </div>
      <div>
        <div className="carousel carousel-center w-full bg-transparent rounded-box bg-green-4">
          {products.map((product) => (
            <Product
              key={product.name}
              name={product.name}
              description={product.description}
              imagePath={product.imagePath}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
export type { IProduct };
