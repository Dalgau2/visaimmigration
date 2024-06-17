import { Box, Paper, Typography } from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ReuseableBackground from "../../ResuseableBackground";
import aboutImage from "../../assets/Images/about.b1cb5c1c.png";
import logoImage from "../../assets/Images/empire-logo.webp";
const AboutPage = () => {
  return (
    <Box>
      <Box>
        <ReuseableBackground
          head={"About Us"}
          body={"About Empire Immigration"}
          bgImage={aboutImage}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "#FEC916",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
        p={5}
      >
        <Box
          component={Paper}
          elevation={5}
          p={5}
          className="mainContainerOfAbout"
          sx={{ padding: "10px" }}
        >
          <Box
            sx={{
              height: "270px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={{height:{xs:"150px"}}}>
              <img src={logoImage} alt="logo Image" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            </Box>
            <Typography variant="h4" mt={2} sx={{ fontFamily: "cential" ,fontSize:{xs:"18px"}}}>
              About Empire Immigration
            </Typography>
          </Box>
          <Box m={2}>
            <Typography>
              Welcome to Empire Immigration, your trusted partner in navigating
              the intricate pathways of international travel and migration. At
              Empire Immigration, we specialize in providing comprehensive
              solutions tailored to meet your global mobility needs. With a
              steadfast commitment to excellence and a passion for seamless
              service delivery, we strive to empower individuals and families to
              embark on transformative journeys with confidence.
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h2"  sx={{ fontFamily: "cential" ,fontSize:{xs:"28px"}}}>
                Our Commitment
              </Typography>
            </Box>
          </Box>
          <Box p={2}>
            <Typography>
              At Empire Immigration, we are driven by a commitment to
              excellence, integrity, and personalized service. With a
              customer-centric approach and a focus on delivering exceptional
              value, we strive to exceed your expectations at every turn. Trust
              Empire Immigration to be your partner in realizing your dreams of
              global exploration, education, and opportunity.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Sectod section */}
      <Box p={5}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2"  sx={{ fontFamily: "cential" ,fontSize:{xs:"38px"}}}>
            Our Services
          </Typography>
        </Box>
        <Box
        p={2}
          sx={{
            display:{xs:"block",sm: "flex"},
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Box
            p={2}
            sx={{
              width: {xs:"240px",md:"600px"},
              border: "1px solid #FEC916",
              borderRadius: "20px",
            }}
          >
            <Box>
              <FeedIcon
                sx={{
                  borderRadius: "100%",
                  fontSize: "100px",
                  padding: "12px",
                  color: "#FEC916",
                  backgroundColor: "#F6F1DE",
                }}
              />
            </Box>
            <Typography sx={{fontSize:"16px",fontWeight:"900"}}>VisaAplication</Typography>
            <Typography>
              Our dedicated team of visa experts possesses a wealth of knowledge
              and experience in handling visa applications for various
              destinations worldwide. From initial consultation to document
              preparation and submission, we are here to guide you through every
              step of the visa process, ensuring a smooth and efficient
              experience.
            </Typography>
          </Box>
          <Box
            p={2}
            sx={{
              width: {xs:"240px",md:"600px"},
              border: "1px solid #FEC916",
              borderRadius: "20px",
            }}
          >
            <Box>
              <AirplaneTicketIcon 
                sx={{
                  borderRadius: "100%",
                  fontSize: "100px",
                  padding: "12px",
                  color: "#FEC916",
                  backgroundColor: "#F6F1DE",
                }}
              />
            </Box>
            <Typography sx={{fontSize:"16px",fontWeight:"900"}}>Flight Booking</Typography>
            <Typography>
              Our dedicated team of visa experts possesses a wealth of knowledge
              and experience in handling visa applications for various
              destinations worldwide. From initial consultation to document
              preparation and submission, we are here to guide you through every
              step of the visa process, ensuring a smooth and efficient
              experience.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AboutPage;
