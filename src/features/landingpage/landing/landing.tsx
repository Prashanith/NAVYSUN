import Header from "../../../components/header/header";

function Landing() {
  function navigate(id: string) {
    document!.getElementById(id)!.scrollIntoView();
  }
  return (
    <div className=" bg-landing bg-cover bg-no-repeat bg-center h-screen bg-opacity-30 pagePadding">
      <Header />
      <div className="text-left sm:text-center pt-[20vh] flex flex-col items-start  sm:items-center">
        <p className=" font-semibold lg:text-8xl md:text-6xl text-5xl">
          <span className="">
            Believe in <span className=" text-secondary">NAVYSUN</span>
          </span>
          <br />
          <span>for Medicine</span>
          <br />
        </p>
        <p className="sm:text-2xl text-lg w-[min(90%,600px)] pt-[2vh] sm:pt-[5vh] font-medium">
          <span>
            We are committed to providing our Customers with exceptional
            service, expert advice and highest quality products
          </span>
        </p>
        <div className="pt-[2vh] sm:pt-[5vh] flex gap-5 sm:flex-row flex-wrap">
          <button className="customBtn elevatedBtn uppercase" onClick={()=>navigate("services")}>Consulting</button>
          <button className="customBtn outlinedBtn uppercase" onClick={()=>navigate('pharmacies')}>Pharmacies</button>
          <button className="customBtn textBtn uppercase" onClick={()=>navigate('products')}>
            PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
