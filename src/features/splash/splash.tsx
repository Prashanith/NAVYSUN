import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../navigation/routes";
import './splash.css'

function SplashScreen() {
  const route = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      route(AppRoutes.HOME);
    }, 1500);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="splash"></div>
      <img src="/logo.png" className="h-[30vh] z-10" />
    </div>
  );
}

export default SplashScreen;
