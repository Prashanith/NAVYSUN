import Logo from "../../../components/logo/logo";
import Subscribe from "../../../components/subscriptionbtn/subscriptionbtn";

function About() {
  return (
    <footer className="bg-gray-900  text-teal-400">
      {/* MAIN CONTENT DIV */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        {/* BRAND - First Row */}
        <div className="mt-8 flex justify-center lg:justify-between flex-col lg:flex-row items-center lg:items-start w-full">
          <Logo showMessage={true} />
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
