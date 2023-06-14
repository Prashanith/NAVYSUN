import Constants from "../../config/config";

interface ILogoProps {
  showMessage: boolean;
  imageHeight: number;
}

function Logo({ showMessage = false, imageHeight = 25 }: ILogoProps) {
  return (
    <div className="flex justify-center items-center gap-5">
      <img src="./logo.png" width={imageHeight} />
      <div>
        <p className=" text-xl">{Constants.brand}</p>
        {showMessage && (
          <p className="mt-2 text-md text-gray-500">{Constants.message}</p>
        )}
      </div>
    </div>
  );
}

export default Logo;
