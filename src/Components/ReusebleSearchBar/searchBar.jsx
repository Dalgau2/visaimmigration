import { Box, Button, Paper } from "@mui/material";
import "../../Pages/HomePage/homepage.css";
const SearchBarForImmigration = ({ buttonName, placeHolderName }) => {
  return (
    <Box className="searchBarOfHearderSection">
      <Box
        component={Paper}
        elevation={4}
        sx={{
          width: {xs:"300px",sm:"300px",md:"550px",lg:"550px"},
          height:{xs:"40px",sm:"55px",md:"60px",lg:"60px"},
          borderRadius: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "101",
          zIndex: "100",

        }}
      >
        <input
          type="text"
          placeholder={placeHolderName}
          style={{
            width:{xs:"300px",sm:"350px",md:"400px",lg:"390px"} ,
            height: { xs:"20px",lg:"35px"},
            padding: "5px",
            outline: "none",
            border: "none",
            borderRadius:"30px"
          }}
        />{" "}
        <Button
          variant="contained"
          sx={{
            marginLeft: {xs:"0px",lg:"5px"},
            marginRight:{xs:"5px"},
            width: {md:"120px",lg:"120px"},
            height: {xs:"30px",lg:"35px"},
            borderRadius: "40px",
            backgroundColor: "black",
            color: "white",
            textTransform: "inherit",
          }}
        >
          {buttonName}
        </Button>
      </Box>
    </Box>
  );
};
export default SearchBarForImmigration;
