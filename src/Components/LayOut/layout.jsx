import { Box } from "@mui/material";
import NavigationBar from "../ImmigrationNav/NavBar";
import { Outlet } from "react-router";
import FooterOfImmigration from "../../Sections/Footer/FooterSection";
const LayoutOfImmigration = () => {
  return (
    <Box className="container">
      <Box className="header">
        <NavigationBar />
      </Box>
      <Box className="outlet" sx={{ minHeight: "80vh" }}>
        <Outlet />
      </Box>
      <Box className="footer">
        <FooterOfImmigration />
      </Box>
    </Box>
  );
};
export default LayoutOfImmigration;
