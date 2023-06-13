// import { useState } from "react";
// import Logo from "../logo/logo";
// import { motion } from "framer-motion";
// import { Animation } from "../../config/animationConfig";


// function NavBar() {
//   const [showSideNav, toggleNav] = useState<boolean>(false);
//   return (
//     <div className="flex flex-row justify-between items-center h-[70px] text-tertiary pagePadding">
//       <Logo />

//       <div>
//         <ul className="sm:flex sm:space-x-5 hidden">
//           {navItems.map((e) => {
//             return (
//               <motion.li
//                 key={e.id}
//                 whileHover={{
//                   scale: "1.2",
//                 }}
//                 initial={{ x: "100vw" }}
//                 animate={{ x: 0 }}
//                 transition={{ delay: Animation.delay }}
//               >
//                 <motion.a
//                   transition={{
//                     delay: 0.6,
//                   }}
//                   href={`#${e.id}`}
//                   className="navItem"
//                 >
//                   {e.name}
//                 </motion.a>
//               </motion.li>
//             );
//           })}
//         </ul>
//       </div>

//       <div className="sm:hidden" onClick={() => toggleNav((s) => !s)}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 9h16.5m-16.5 6.75h16.5"
//           />
//         </svg>
//       </div>

//       <SideNavigation showNav={showSideNav} setShownav={toggleNav} />
//     </div>
//   );
// }



// export default NavBar;
