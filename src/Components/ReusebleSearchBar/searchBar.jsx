import { Box, Button, Paper } from "@mui/material";
import "../ReusebleSearchBar/styleOfSearchBar.css"
const SearchBarForImmigration = ({ buttonName, placeHolderName }) => {
  return (
    <Box className="searchBarOfHearderSection">
      <Box
        component={Paper}
        elevation={4}
        sx={{
          width: {xs:"270px",sm:"550px",md:"540px",lg:"545px"},
          height:{xs:"35px",sm:"55px",md:"60px",lg:"50px"},
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
          // style={{
          //   width:"100%",
          //   padding: "5px",
          //   outline: "none",
          //   border: "none",
           
          //   marginLeft:"10px",
          //   marginRight:"10px",
          // }}
          className="searchInputSection active"
        />{" "}
        <Button
          variant="contained"
          // sx={{
          //   marginLeft: {xs:"0px",lg:"20px"},
          //   marginRight:{xs:"5px"},
          //   width:"120px",
          //   height:{xs:"20px",sm:"40px",md:"40px",lg:"40px"},
          //   borderRadius: "40px",
          //   backgroundColor: "black",
          //   color: "white",
          //   textTransform: "inherit",
          //   background:"red",
          //   marginRight:"10px",
          //   fontSize:{xs:"10px"}
          // }}
          className="searchBarButton"
        >
          {buttonName}
        </Button>
      </Box>
    </Box>
  );
};
export default SearchBarForImmigration;
