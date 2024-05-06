import { Box, Typography } from "@mui/material";
import "../Achievment/achivementSection.css";
import AchivementCardList from "./AchivementCartList";
const OurAchievements = () => {
  return (
    <Box className="AchivementContainer" >
      <Box
        className="Achivementsection"
        sx={{ width: "100%" }}
      >
        <Box
          sx={{
            width: "100%",
            minHeight: "120px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "800px",
              minHeight: "100px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, fontFamily: "juana" }}
            >
              Our Great Achievements
            </Typography>
            <Typography component="body2">
              We are dedicated to making your journey of discovery truly
              unforgettable. Our team of passionate travel experts is here to
              assist you in finding the destination of your dreams.
            </Typography>
          </Box>
        </Box>
        <Box className="AchivementSection">
          <Box>
            <AchivementCardList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default OurAchievements;
