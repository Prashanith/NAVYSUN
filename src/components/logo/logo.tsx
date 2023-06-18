import { motion } from "framer-motion";
import Constants from "../../config/config";

interface ILogoProps {
  showMessage: boolean;
  imageHeight: number;
}

function Logo({ showMessage = false, imageHeight = 25 }: ILogoProps) {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0 , duration:1, type:"spring"}}

      className="flex justify-center items-center gap-5"
    >
      <img src="./logo.png" width={imageHeight} />
      <div>
        <p className=" text-xl">{Constants.brand}</p>
        {showMessage && (
          <p className="mt-2 text-md text-gray-500">{Constants.message}</p>
        )}
      </div>
    </motion.div>
  );
}

export default Logo;
