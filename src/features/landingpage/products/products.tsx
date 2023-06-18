import React from "react";
import Product from "./product";
import { motion } from "framer-motion";

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
    name: "XOMNI GEL",
    description: "",
    imagePath: "./med1.svg",
  },
  {
    name: "XVOLINI",
    description: "",
    imagePath: "./med2.svg",
  },
  {
    name: "YVIPER 60",
    description: "",
    imagePath: "./med3.svg",
  },
  {
    name: "YGOAL 360",
    description: "",
    imagePath: "./med4.svg",
  },
];

function Products() {
  return (
    <div
      id="products"
      className="flex flex-col pagePadding componentSpacing justify-center bg-white"
    >
      <div className="font-bold text-4xl lg:text-5xl">
        <motion.p
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0, duration: 2, type: "spring" }}
        >
          PRODUCTS
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
      >
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
      </motion.div>
    </div>
  );
}

export default Products;
export type { IProduct };
