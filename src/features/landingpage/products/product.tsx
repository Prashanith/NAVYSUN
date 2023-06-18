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

  function getAverageRGB(imgEl) {
    var blockSize = 5, // only visit every 5 pixels
      defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
      canvas = document.createElement("canvas"),
      context = canvas.getContext && canvas.getContext("2d"),
      data,
      width,
      height,
      i = -4,
      length,
      rgb = { r: 0, g: 0, b: 0 },
      count = 0;

    if (!context) {
      return defaultRGB;
    }

    height = canvas.height =
      imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width =
      imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
      data = context.getImageData(0, 0, width, height);
    } catch (e) {
      /* security error, img on diff domain */
      return defaultRGB;
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
      ++count;
      rgb.r += data.data[i];
      rgb.g += data.data[i + 1];
      rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;
  }

  function get_average_rgb(img:any) {
    var context = document.createElement("canvas").getContext("2d");
    if (typeof img == "string") {
      var src = img;
      img = new Image();
      img.setAttribute("crossOrigin", "");
      img.src = src;
    }
    context!.imageSmoothingEnabled = true;
    context!.drawImage(img, 0, 0, 1, 1);
    return `rgb(${context!.getImageData(0, 0, 1, 1).data.slice(0, 3)})`;
  }
  return (
    <div className="flex flex-col justify-center items-start carousel-item w-36 md:w-48 lg:w-64  py-8 mr-8 ">
      <img
        src={imagePath}
        className={`h-44 md:w-60 lg:h-80 bg-white  rounded-xl px-10`}
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
