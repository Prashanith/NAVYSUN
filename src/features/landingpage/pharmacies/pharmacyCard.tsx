interface Pharmacy {
  name: string;
  location: string;
  description: string;
  imagePath: string;
}

function PharmacyCard({ name, location, description, imagePath }: Pharmacy) {
  const navigateToGoogleMaps = (link: string) => window.open(link, "_blank");
  return (
    <div className="h-auto sm:h-56 w-full sm:w-56 hover:scale-125 bg-white hover:bg-secondary hover:text-white text-primary shadow-xl rounded-lg p-5">
      <div className="flex justify-between items-center pt-2">
        <img src={imagePath} className="h-12" />
        <p
          onClick={() => navigateToGoogleMaps(location)}
          className=" cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </p>
      </div>
      <p className=" text-lg font-bold pt-5">{name}</p>
      <p className=" text-sm font-extralight pt-3">{description}</p>
    </div>
  );
}

export default PharmacyCard;
export type { Pharmacy };
