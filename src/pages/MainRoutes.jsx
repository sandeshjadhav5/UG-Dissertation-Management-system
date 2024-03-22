import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import AboutUs from "./AboutUs";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Queries from "./Queries";
import EditData from "./EditData";
import YourGuide from "./YourGuide";
import GuideLogin from "./GuideLogin";
import GuideDashboard from "./GuideDashboard";
import GuideStudents from "./GuideStudents";
import GuideTasks from "./GuideTasks";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import AddTeamMembers from "./AddTeamMembers";
import ManageProgress from "./ManageProgress";




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
      <Route path="/addteammembers" element={<AddTeamMembers />} />
      <Route path="/editdata" element={<EditData />} />
      <Route path="/yourguide" element={<YourGuide />} />
      <Route path="/manageprogress" element={<ManageProgress />} />
      <Route path="/guidelogin" element={<GuideLogin />} />
      <Route path="/guidedashboard" element={<GuideDashboard />} />
      <Route path="/guidestudents" element={<GuideStudents />} />
      <Route path="/guidetasks" element={<GuideTasks />} />
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/admindashboard" element={<AdminDashboard/>}/>
    </Routes>
  );
}
export default MainRoutes;
