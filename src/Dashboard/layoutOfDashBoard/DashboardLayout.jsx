import { Box } from "@mui/material";
import AsideBarOfDashboard from "./Asidebar/asideBar";
import NavBarOfDashboard from "../DashboardNavBar/NavBarOfDashboard";
import { Outlet } from "react-router-dom";
const DashBoardLayout = () => {
  return (
    <Box classNmae="wrapper" sx={{ display: "flex" }}>
      <Box>
        <Box sx={{position:"sticky",top:"0%",bottom:"0%"}}>
          <AsideBarOfDashboard />
        </Box>
      </Box>
      <Box sx={{width:"80%",background:"#f5f5f5"}}>
        <Box sx={{position:"sticky",top:"0%",bottom:"0%",zIndex:2}}><NavBarOfDashboard/></Box>
        <Box><Outlet/></Box>
      </Box>
    </Box>
  );
};
export default DashBoardLayout;
