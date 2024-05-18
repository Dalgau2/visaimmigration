import { Box, Paper, Typography } from "@mui/material";
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
      <Box  sx={{ backgroundColor: "#FEC916" }} p={5}>
        <Box
          component={Paper}
          elevation={5}
          p={5}
          className="mainContainerOfAbout"
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
            <Box>
              <img src={logoImage} alt="logo Image" />
            </Box>
            <Typography variant="h2" sx={{ fontFamily: "cential" }}>
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
              <Typography>Our Commitment</Typography>
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
    </Box>
  );
};
export default AboutPage;
