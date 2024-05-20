import { Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LogoutIcon from "@mui/icons-material/Logout";
import data from "../Components/ImmigrationNav/NavOption.json";
import logoimage from "../assets/Images/empire-logo-white.webp";
import { Link } from "react-router-dom";

let dashboardLink = [
  {
    id: "1",
    navlink: "Dashboard",
    href: "/dasboard",
    icons: <DashboardIcon />,
  },
  {
    id: "2",
    navlink: "Application",
    href: "/applicatin",
    icons: <ListAltIcon />,
  },
  {
    id: "3",
    navlink: "Applay for new",
    href: "/apply",
    icons: <AssignmentIcon />,
  },
  {
    id: "4",
    navlink: "Support",
    href: "/support",
    icons: <HeadsetMicIcon />,
  },
  {
    id: "5",
    navlink: "Logout",
    href: "/logout",
    icons: <LogoutIcon />,
  },
];

const AsideBarOfDashboard = () => {
  return (
    <Box
      p={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100px", height: "80px", marginBottom: "10px" }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={logoimage}
          alt=""
        />
      </Box>
      <Box
        p={2}
        sx={{
          width: "235px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "10px",
          backgroundColor: "#212121",
        }}
      >
        <Box>
          <img
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "100%",
              objectFit: "contain",
            }}
            src={logoimage}
            alt="profile image"
          />
        </Box>
        <Typography>Gautam</Typography>
        <Typography>Email</Typography>
        <Typography>Contactnumber</Typography>
      </Box>
      <Box
        sx={{
          width: "235px",
          height: "305px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: "1px",
          padding: "4px",
        }}
      >
        {dashboardLink.map((dasnav) => {
          return (
           
              <a href={`${dasnav.href}`}>{dasnav.navlink}</a>
            
          );
        })}
      </Box>
    </Box>
  );
};
export default AsideBarOfDashboard;
