import { Box, Button, Paper } from "@mui/material";
import "../../Pages/HomePage/homepage.css";
const SearchBarForImmigration = ({ buttonName, placeHolderName }) => {
  return (
    <Box className="searchBarOfHearderSection">
      <Box
        component={Paper}
        elevation={4}
        sx={{
          width: "550px",
          height: "60px",
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
            width: "390px",
            height: "35px",
            padding: "5px",
            outline: "none",
            border: "none",
          }}
        />{" "}
        <Button
          variant="contained"
          sx={{
            marginLeft: "5px",
            width: "120px",
            height: "35px",
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
