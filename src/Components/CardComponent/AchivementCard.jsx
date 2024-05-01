import { Box, Typography } from "@mui/material";
const AchivementCard = ({ data }) => {
  return (
    // <Box>
      <Box
        sx={{
          width:{xs:"400px",xl:"300px",sm:"400px",md:"300px"},
          height: {xs:"200px",sm:"150px",md:"150px",lg:"150px",xl:"150px"},
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "rgb(57, 57, 57)",
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: " rgb(255, 203, 42);" }}
        >
          {data.id}+
        </Typography>
        <Typography>{data.navlink}</Typography>
      </Box>
    // </Box>
  );
};
export default AchivementCard;
