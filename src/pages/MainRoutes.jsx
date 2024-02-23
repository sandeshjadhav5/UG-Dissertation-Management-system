import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import AboutUs from "./AboutUs";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Queries from "./Queries";
import EditData from "./EditData";
import YourGuide from "./YourGuide";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/submitquery" element={<Queries />} />
      <Route path="/editdata" element={<EditData />} />
      <Route path="yourguide" element={<YourGuide />} />
    </Routes>
  );
}
export default MainRoutes;
