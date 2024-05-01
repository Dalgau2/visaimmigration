import { Box, Typography } from "@mui/material";
import "./styleofSuccess.css";
const OurSuccessSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        padding: "50px",
        paddingLeft: "80px",
        paddingRight: "80px",
        justifyContent: {
          md: "center",
          sm: "center",
          sx: "center",
          xs: "center",
          xl: "center",
        },
        flexDirection: {
          xl: "row",
          lg: "row",
          md: "column",
          sm: "column",
          xs: "column",
        },
      }}
    >
      <Box
        className="SuccessHeading"
        sx={{
          width: { xl: "50%", lg: "50%", md: "100%", sm: "100%", xs: "100%" },
        height:{xl:"100vh",lg:"100vh",md:"400px",sm:"300px",xs:"150px"}}}
      >
        <Typography
          sx={{
            fontSize: { xl: "140px", lg: "60px", md: "50px", sm: "35px" },
            fontWeight: "700",
            fontFamily: "Poppins",
          }}
        >
          100% Success Visa From Southeast Asia
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xl: "130px", lg: "65", md: "60px", sm: "45px" },
            fontWeight: 400,
            color: " rgb(100, 100, 100)",
          }}
        >
          to the World
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: {
              lg: "400px",
              xl: "650px",
              md: "330px",
              sm: "270px",
              md: "50%",
            },
            fontSize: { xl: "30px", md: "30px", lg: "18px" },
          }}
        >
          Stay updated with travel tips,recommendations, and latest promos.
        </Typography>
      </Box>
      <Box className="successImage"></Box>
    </Box>
  );
};
export default OurSuccessSection;
