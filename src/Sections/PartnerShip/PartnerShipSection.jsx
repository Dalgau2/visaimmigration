import { Box, Typography } from "@mui/material";
import startup from "../../assets/Images/footer1.ba14c0f5.png";
import itat from "../../assets/Images/footer2.f74b3b54.png";
import tripadvicer from "../../assets/Images/footer3.46b72933.png";
import chinalogo from "../../assets/Images/footer4.628fe7b6.png";
const PartnerBrand = () => {
  return (
    <Box
      sx={{
        minHeight: "200px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
        justifyContent: "center",
      }}
    >
      <Box
        border={1}
        sx={{
          width: "210px",
          height: "160px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRight: "1px solid grey",
          marginRight: "10px",
          
        }}
        className="PartnerBrans"
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            color: "white",
            marginRight: "10px",
          }}
        >
          Partners We Love ❤️ to Work With
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "100px",
          alignItems: "center",
          gap: "40px",
         
        }}
      >
        <Box>
          <img src={startup} alt="" />
        </Box>
        <Box>
          <img src={itat} alt="Logo" />
        </Box>
        <Box>
          <img src={tripadvicer} alt="" />
        </Box>
        <Box>
          <img src={chinalogo} alt="" />
        </Box>
      </Box>
    </Box>
  );
};
export default PartnerBrand;
