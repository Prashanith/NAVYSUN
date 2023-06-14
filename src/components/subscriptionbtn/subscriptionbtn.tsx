import { useState } from "react";
import "./subscribebtn.css";
import Socials from "../socials/socials";

function Subscribe() {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function submitEmail() {
    try {
      setIsLoading(true);
    } catch (error) {}
    setIsLoading(false);
  }

  return (
    <div className="my-10 lg:mt-0 subscribe max-w-[370px] lg:text-left text-center">
      <p className="text-xl font-extrabold">Connect with us</p>
      <div className="mt-4">
        <Socials />
      </div>
      <p className="mt-12 text-xl font-extrabold">
        Stay up to date with NAVYSUN{" "}
      </p>
      <p className="mt-2 text-lg font-normal">
        Subscribe to our news letter to receieve updates of the product
        launches, events, schemes. We respect your privacy, your information is
        safe and will never be shared
      </p>
      <div className="lg:mx-0 mx-auto mt-6 flex flex-row items-center justify-start subscribeComp  ">
        <input
          className="subscribeInputField text-left"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button onClick={() => submitEmail()} className="subscribeBtn">
          {isLoading ? <div>Loader</div> : <div>SUBSCRIBE</div>}
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
