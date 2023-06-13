import Constants from "../../config/config";

function Logo() {
  return (
    <div className="flex justify-start items-center gap-5">
      <img src="./pill.png" className="h-[25px]" />
      <p className=" text-xl">{Constants.brand}</p>
    </div>
  );
}

export default Logo;
