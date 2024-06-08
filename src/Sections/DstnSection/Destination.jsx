import { Box, Typography, Button, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import "./dsection.css";
import VisaCard from "../../Components/CardComponent/ReviewCard/VisaCard";
import AllCategoryButton from "../../Button/AllCategoryButton";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router";
const ExploarDestination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const visaData = useSelector((state) => state.data.data);
  const pathname = useLocation();
  const navigate = useNavigate();
  const packagepath = pathname.pathname;
  const duration = searchParams.get("duration");
  let filtered = visaData;
  if (packagepath == "/packages" && duration == null) {
    filtered = visaData;
  } else if (duration == null) {
    filtered = visaData.slice(0, 10);
  } else if (duration === "instant") {
    filtered = visaData.filter((data) => data.visa_in_days <= 1 && data.visa_in_days>=0);
  } else if (duration === "inaweak") {
    filtered = visaData.filter((data) => data.visa_in_days >= 7 && data.visa_in_days<=7);
  } else if (duration === "inamonth") {
    filtered = visaData.filter((data) => data.visa_in_days <= 30);
  }
  const handleClickExploreAll = () => {
    navigate("/packages");
  };
  return (
    <Box className="DestinationContainer">
      {/* Expolation Section  Start */}
      <Box sx={{ textAlign: "center" }}>
        <AllCategoryButton />
      </Box>
      {/* End Pont of Button section */}
      <Box
        sx={{
          display: {
            xs: "grid",
            sm: "grid",
            md: "grid",
            lg: "grid",
            xl: "grid",
          },
          justifyItems: "center",
          gap: "10px",
          padding: "30px",
          gridTemplateColumns: "repeat(4,1fr)",
          gridTemplateColumns: {
            xl: "repeat(7,1fr)",
            lg: "repeat(4,1fr)",
            md: "repeat(4,1fr)",
            sm: "repeat(2,1fr)",
            sx: "repeat(1,1fr)",
            xs: "repeate(1,2fr)",
          },
        }}
      >
        {filtered.map((data, index) => {
          return (
            <Box key={index}>
              <VisaCard data={data} />
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        {packagepath == "/packages" ? null : (
          <Button
            sx={{
              color: "black",
              outline: "1px solid black",
              textTransform: "none",
              borderRadius: "20px",
              width: "100px",
              fontWeight: "400",
              "&:hover": { color: "white", outline: "1px solid white" },
            }}
            onClick={handleClickExploreAll}
          >
            Explore all
          </Button>
        )}{" "}
      </Box>
    </Box>
  );
};
export default ExploarDestination;
