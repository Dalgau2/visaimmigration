import { Box, Typography, IconButton } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaFacebook } from "react-icons/fa";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "../Footer/fotterStyle.css";
import logo from "../../assets/Images/Plane.webp";
import PartnerBrand from "../PartnerShip/PartnerShipSection";
const FooterOfImmigration = () => {
  return (
    <Box>
      <Box>
        {/* <PartnerBrand /> */}
      </Box>
      <Box
        className="footerSection"
        sx={{
          height: {md:"390px",lg:"390px"},
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // padding:"100px",
            //=================>Main section 1 Of footer thhat is outter section
        }}
      >
        <Box
          sx={{
            display: {xs:"flex",sm:"flex",md:"flex",lg:"flex"},
            justifyContent: "center",
            flexDirection:{xs:"column",lg:"row",md:"row",sm:"row"},
            alignItems: {lg:"center"},
           
            className:"mainConatainerOfLinks",
            // width:{sm:"100%"}
            //===================>centerSection of Footer inner Div
          }}
        >
          {/* logo and link section of footer */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              height: {xs:"150px",lg:"300px"},
              color: "white",
              
            }}
          >
            <Box sx={{ display: "flex", width: {sm:"100px",lg:"260px"}}}>
              <Box sx={{ display: { xs: "flex", md: "flex" }, mr: 2 }}>
                <img src={logo} alt="logo" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="h5"
                  // noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                      // display: { xs: "none", md: "flex" },
                    fontWeight: 700,
                    color: "inherit",
                    textDecoration: "none",
                   fontSize:{sm:"18px"}
                  }}
                >
                  Immigration
                </Typography>
              </Box>
            </Box>
            {/* Logo and Icon of Social media */}
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: "190px",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <IconButton sx={{ color: "white" }}>
                  <FaFacebook />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <XIcon />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <YouTubeIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box className="fotter">
            <Typography>Study Abroad</Typography>
            <Box className="linkOfFooter">
              <ul>
                <li>How to choose your destination</li>
                <li>Study abroad intakes</li>
                <li>Guide for parents</li>
                <li>THE World University Rankings</li>
                <li>QS World University Rankings</li>
                <li>GC Events</li>
                <li>Institution answers</li>
                <li>Student Essentials</li>
              </ul>
            </Box>
          </Box>
          <Box className="fotter">
            <Typography>Useful Links</Typography>

            <Box className="linkOfFooter">
              <ul>
                <li>GC Blog</li>
                <li>Engineering courses</li>
                <li>Health and medicine</li>
                <li>Information technology</li>
                <li>Management courses</li>
                <li>Find Scholarships</li>
                <li>Student Reviews</li>
                <li>Ask GC</li>
              </ul>
            </Box>
          </Box>
          <Box className="fotter">
            <Typography>IELTS</Typography>
            <Box className="linkOfFooter">
              <ul>
                <li>What is IELTS?</li>
                <li>Prepare for IELTS</li>
                <li>Computer-delivered IELTS</li>
                <li>Book my IELTS test</li>
                <li>IELTS for UKVI</li>
                <li>IELTS test dates</li>
                <li>Institution answers</li>
                <li>About GC IELTS</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display:{xs:"block",sm:"flex",md:"flex"},
          justifyContent: "space-around",
          color: "white",
          alignItems: "center",
          minHeight: "50px",
          backgroundColor: "black",
        }}
      >
        <Typography>
          copyright <CopyrightIcon sx={{ fontSize: "small" }} /> 2024
          Immigration
        </Typography>
        <Box
          sx={{
            display:{xs:"inline",lg:"flex",sm:"flex",md:"flex"},
            alignItems: "center",
            width: "670px",
            justifyContent: "space-between",
            fontSize:{sm:"11px",md:"16px"},
            backgroundColor: {xs:"black",lg:"black",md:"black"},
          }}
        >
          {" "}
          Developed and maintained by
          <Typography
            ml={0.5}
            sx={{
              color: "#FDD300",
              borderBottom: "2px solid #FDD300",
              height: "22px",
            
            }}
          >
            GA Impire plt
          </Typography>
          <Typography>Disclaime</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Terms of use</Typography>
        </Box>
      </Box> 
    </Box>
  );
};
export default FooterOfImmigration; 
