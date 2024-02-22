import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import AboutUs from "./AboutUs";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default MainRoutes;
