import { motion } from "framer-motion";
import HealthService, { DayOfWeek } from "./healthService";

function Services() {
  const healthServices: HealthService[] = [
    {
      doctor: "Dr Shivanand Reddy",
      speciality: "Neurology, Multi Speciality",
      availability: [
        {
          dayOfWeek: DayOfWeek.MONDAY,
          from: "5:00 PM",
          to: "9:00 PM",
        },
        {
          dayOfWeek: DayOfWeek.TUESDAY,
          from: "5:00 PM",
          to: "9:00 PM",
        },
        {
          dayOfWeek: DayOfWeek.WEDNESDAY,
          from: "5:00 PM",
          to: "9:00 PM",
        },
        {
          dayOfWeek: DayOfWeek.THURSDAY,
          from: "5:00 PM",
          to: "9:00 PM",
        },
        {
          dayOfWeek: DayOfWeek.FRIDAY,
          from: "5:00 PM",
          to: "9:00 PM",
        },
      ],
      specialnote: "Clinic is not open holidays",
      imagePath: "./doctor1.jpg",
    },
    {
      doctor: "Dr K.Gouthami",
      speciality: "Neurology, Multi Speciality",
      availability: [
        {
          dayOfWeek: DayOfWeek.MONDAY,
          from: "5:00 PM",
          to: "9:00 PM",
        },
        {
          dayOfWeek: DayOfWeek.TUESDAY,
          from: "5:00 PM",
          to: "9:00 PM",
        },
        {
          dayOfWeek: DayOfWeek.WEDNESDAY,
          from: "5:00 PM",
          to: "9:00 PM",
        },
        {
          dayOfWeek: DayOfWeek.THURSDAY,
          from: "5:00 PM",
          to: "9:00 PM",
        },
        {
          dayOfWeek: DayOfWeek.FRIDAY,
          from: "5:00 PM",
          to: "9:00 PM",
        },
      ],
      specialnote: "Clinic is not open holidays",
      imagePath: "./doctor2.jpg",
    },
  ];

  return (
    <div
      id="services"
      className="w-full pagePadding componentSpacing bg-white flex flex-col xl:flex-row items-center bg-[url('./bg.png')] gap-8"
    >
      {/* A Heritage in Care, A Reputation in Excellence */}
      <div className="w-full xl:w-1/2">
        <motion.p
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0, duration: 2, type: "spring" }}
          className="font-semibold lg:text-8xl md:text-6xl text-5xl"
        >
          We always provide
          <span className="text-secondary"> best service</span>
        </motion.p>
        <motion.p
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0, duration: 2, type: "spring" }}
          className="sm:text-2xl text-lg w-[min(90%,600px)] pt-[2vh] sm:pt-[5vh] font-medium"
        >
          We will help you feel better and ace every single day of your life.
          Visit our best in class clinics
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
        className="flex gap-10 flex-col md:flex-row xl:flex-col"
      >
        {healthServices.map((service) => (
          <HealthService
            key={service.doctor}
            imagePath={service.imagePath}
            doctor={service.doctor}
            speciality={service.speciality}
            availability={service.availability}
            specialnote={service.specialnote}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
