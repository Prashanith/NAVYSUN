import { motion } from "framer-motion";
import PharmacyCard, { Pharmacy } from "./pharmacyCard";

function Pharmacies() {
  const pharmacies: Pharmacy[] = [
    {
      name: "Vigneshwara Pharmacies",
      description: "Shivam Road,Amberpet,Hyderabad",
      location: "https://goo.gl/maps/sGJns77X94urrGqCA",
      imagePath: "./villa.svg",
    },
    {
      name: "Sun Pharma",
      description: "Shivam Road,Amberpet,Hyderabad",
      location: "https://goo.gl/maps/sGJns77X94urrGqCA",
      imagePath: "./villa.svg",
    },
    {
      name: "Vijaya Diagnostics",
      description: "Shivam Road,Amberpet,Hyderabad",
      location: "https://goo.gl/maps/sGJns77X94urrGqCA",
      imagePath: "./villa.svg",
    },
    {
      name: "SUN Agencies",
      description: "Shivam Road,Amberpet,Hyderabad",
      location: "https://goo.gl/maps/sGJns77X94urrGqCA",
      imagePath: "./villa.svg",
    },
  ];
  return (
    <div
      id="pharmacies"
      className="pagePadding componentSpacing bg-white flex xl:flex-row flex-col justify-start lg:justify-center items-start xl:items-center gap-16 xl:gap-0"
    >
      <div className="flex-1">
        <motion.p
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0, duration: 2, type: "spring" }}
          className="font-semibold lg:text-8xl md:text-6xl text-5xl"
        >
          <span>Here are our</span>
          <br />
          <span className=" text-secondary">Pharmacies.</span>
        </motion.p>
        <motion.p
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0, duration: 2, type: "spring" }}
          className="sm:text-2xl text-xl font-medium mt-10"
        >
          Get Medicines from the best of our pharmacies
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
        className="flex flex-wrap basis-2/4 justify-center  xl:justify-start items-start gap-6 content-center justify-items-center"
      >
        {pharmacies.map((pharmacy) => (
          <PharmacyCard
            key={pharmacy.name}
            name={pharmacy.name}
            location={pharmacy.location}
            description={pharmacy.description}
            imagePath={pharmacy.imagePath}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Pharmacies;
