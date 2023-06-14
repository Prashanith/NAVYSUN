import Logo from "../../../components/logo/logo";
import Subscribe from "../../../components/subscriptionbtn/subscriptionbtn";

function About() {
  return (
    <footer className="bg-gray-900  text-teal-400">
      {/* MAIN CONTENT DIV */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        {/* BRAND - First Row */}
        <div className="mt-8 flex justify-center lg:justify-between flex-col lg:flex-row items-center lg:items-start w-full">
          <div className="flex flex-col justify-start items-start">
            <Logo showMessage={true} />
            <p className="ml-[44px] mt-5 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <a href="tel:+919550066657">+91 9550066657</a>
            </p>
            <p className="ml-[44px] mt-3 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>

              <a href="mailto:navysun@gmail.com">navysun@gmail.com</a>
            </p>
            <p className="ml-[44px] mt-3 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <a href="https://www.google.com/maps/dir//Navysun+Pharma/@17.3950834,78.4407717,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb991ea3d64e37:0xac500c005255251a!2m2!1d78.5108122!2d17.3950956?entry=ttu" target="_blank">
                Shivam Road New Nallakunta Hyderabad, Telangana 500044 India
              </a>
            </p>
          </div>
          <QuickLinks />
          <Subscribe />
        </div>

        {/* PRIVACY POLICY */}

        <div className="mt-8 border-t-[1px] border-teal-700 pt-8">
          <div className="sm:flex sm:justify-center">
            <p className="text-md text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear().toString()}. NAVYSUN
              PHARMACEUTICALS. All rights reserved.
            </p>

            {/* <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Cookies
                </a>
              </li>
            </ul> */}
          </div>
        </div>

        {/* END */}
      </div>
    </footer>
  );
}

function QuickLinks() {
  return (
    <ul className="mt-8 lg:mt-0 text-lg flex flex-row lg:flex-col flex-wrap justify-center items-center lg:items-start gap-5 lg:gap-x-5">
      <li className=" lg:inline-block hidden">QUICK LINKS</li>
      <li>
        <a
          href="#"
          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
        >
          Home
        </a>
      </li>

      <li>
        <a
          href="#"
          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
        >
          Medicines
        </a>
      </li>

      <li>
        <a
          href="#"
          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
        >
          Contact
        </a>
      </li>

      <li>
        <a
          href="#"
          className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
        >
          Pharmacies
        </a>
      </li>
    </ul>
  );
}

export default About;
