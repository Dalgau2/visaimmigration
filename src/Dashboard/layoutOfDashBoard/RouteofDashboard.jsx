import { Route, Routes } from "react-router-dom";
import DashBoardLayout from "./DashboardLayout";
import Dashboard from "../DashboardPages/Dashboard";
import ApplicationPage from "../DashboardPages/Application";
import ApplyNew from "../DashboardPages/ApplyNew";
import Logout from "../DashboardPages/Logout";
import SupportPage from "../DashboardPages/Suppport";

const RouteOfDashboard = () => {
  return (
    <Routes>
        <Route  element={<DashBoardLayout/>}>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/application" element={<ApplicationPage/>}/>
            <Route path="/new-apply" element={<ApplyNew/>}/>
            <Route path="/support" element={<SupportPage/>}/>
            <Route path="/logout" element ={<Logout/>}/>
        </Route>
    </Routes>
  );
};
export default RouteOfDashboard;
