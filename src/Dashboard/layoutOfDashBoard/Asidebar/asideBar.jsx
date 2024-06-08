import { Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LogoutIcon from "@mui/icons-material/Logout";
import logoimage from "../../../assets/Images/empire-logo-white.webp";
import { Link } from "react-router-dom";
import "./styleofAsidenav.css";

let dashboardLink = [
  {
    id: "1",
    navlink: "Dashboard",
    href: "/dashboard",
    icons: <DashboardIcon />,
  },
  {
    id: "2",
    navlink: "Application",
    href: "/application",
    icons: <ListAltIcon />,
  },
  {
    id: "3",
    navlink: "Apply for new",
    href: "/new-apply",
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
        backgroundColor:"#1C1C1C ",
        width:"300px",
        height:"100vh",
      }}
    >
      <Box sx={{ width: "100px" }}>
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
        <Typography sx={{ color: "white", fontWeight: "700" }}>
          Gautam
        </Typography>
        <Typography sx={{ color: "white", fontWeight: "400" }}>
          Email
        </Typography>
        <Typography sx={{ color: "white", fontWeight: "400" }}>
          Contactnumber
        </Typography>
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
            <Box
              sx={{
                height: "50px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                ":hover": {
                  color: "#FEC916",
                  cursor: "pointer",
                  borderRadius: "10px",
                },
              }}
            >
              <Link
                to={`${dasnav.href}`}
                style={{
                  width: "100%",
                  paddingLeft: "20px",
                  textDecoration: "none",
                  display: "flex",
                }}
                className="asideLink"
              >
                <Box sx={{ width: "50px" }}>{dasnav.icons}</Box>
                {dasnav.navlink}
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default AsideBarOfDashboard;
