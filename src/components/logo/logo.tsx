import Constants from "../../config/config";

interface ILogoProps {
  showMessage: boolean;
}

function Logo({ showMessage = false }: ILogoProps) {
  return (
    <div className="flex justify-start items-start gap-5">
      <img src="./pill.png" className="h-[25px]" />
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
