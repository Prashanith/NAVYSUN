import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes";
import SplashScreen from "../features/splash/splash";
import LandingPage from "../features/landingpage/landingpage";

function ApplicationRouter() {
  return (
    <Routes>
      <Route path={AppRoutes.SPLASH} element={<SplashScreen />} />
      <Route path={AppRoutes.HOME} element={<LandingPage />} />
    </Routes>
  );
}

export default ApplicationRouter;
