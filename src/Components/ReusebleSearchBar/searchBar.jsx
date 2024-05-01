import { Box, Button, Paper } from "@mui/material";
import "../../Pages/HomePage/homepage.css";
const SearchBarForImmigration = ({ buttonName, placeHolderName }) => {
  return (
    <Box className="searchBarOfHearderSection">
      <Box
        component={Paper}
        elevation={4}
        sx={{
          width: {xs:"300px",sm:"300px",md:"550px",lg:"545px"},
          height:{xs:"40px",sm:"55px",md:"60px",lg:"50px"},
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
            width:"390px" ,
            height:{xs:"30px",sm:"40px",md:"40px",lg:"40px"},
            padding: "5px",
            outline: "none",
            border: "none",
            borderRadius:"30px",
            marginLeft:"5px",
          }}
        />{" "}
        <Button
          variant="contained"
          sx={{
            marginLeft: {xs:"0px",lg:"20px"},
            marginRight:{xs:"5px"},
            width: {md:"120px",lg:"120px"},
            height:{xs:"30px",sm:"40px",md:"40px",lg:"40px"},
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
