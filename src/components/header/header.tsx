import { useState } from "react";
import Logo from "../logo/logo";
import { motion } from "framer-motion";

interface NavItem {
  name: string;
  id: string;
}

interface INavItem {
  showNav: boolean;
  setShownav: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems: NavItem[] = [
  { name: "CONTACT US", id: "contact" },
  { name: "ABOUT US", id: "about" },
];

const sideNavItems: NavItem[] = [
  { name: "HOME", id: "#" },
  { name: "PRODUCTS", id: "products" },
  { name: "PHARMACIES", id: "pharmacies" },
  { name: "HEALTH CARE", id: "services" },
  { name: "CONTACT US", id: "contact" },
  { name: "ABOUT US", id: "about" },
];

function Header() {
  const [showSideNav, toggleNav] = useState<boolean>(false);

  return (
    <div
      id="header"
      className=" bg-tertiary h-[70px] flex flex-row justify-between items-center"
    >
      <Logo showMessage={false} imageHeight={50} />
      <div>
        <ul className="lg:flex sm:space-x-5 hidden">
          {navItems.map((e) => {
            return (
              <motion.li
                key={e.id}
                whileHover={{
                  scale: "1.2",
                }}
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0, duration: 1, type: "spring" }}
              >
                <motion.a
                  transition={{
                    delay: 0.6,
                  }}
                  href={`#${e.id}`}
                  className="navItem"
                >
                  {e.name}
                </motion.a>
              </motion.li>
            );
          })}
        </ul>
      </div>

      <div className="lg:hidden" onClick={() => toggleNav((s) => !s)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </div>

      <SideNavigation showNav={showSideNav} setShownav={toggleNav} />
    </div>
  );
}

function SideNavigation({ showNav, setShownav }: INavItem) {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0, duration: 3, type:"spring" }}
      className={`h-screen bg-primary text-tertiary shadow-rose-400 shadow-xl fixed top-0 left-0 z-10 px-8 transition-all ease-out duration-[1500] ${
        showNav ? "lg:invisible visible" : "invisible"
      }`}
    >
      <div className="mt-5">
        <Logo showMessage={false} imageHeight={40} />
      </div>
      <ul className="flex flex-col space-y-5 pt-8">
        {sideNavItems.map((e) => {
          return (
            <li key={e.id}>
              <motion.a
                whileTap={{
                  scale: 1.3,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                href={`#${e.id}`}
                className="navItem"
                onClick={() => {
                  if (showNav) {
                    setShownav(false);
                  }
                }}
              >
                {e.name}
              </motion.a>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export default Header;
