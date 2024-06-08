import ReuseableBackground from "../../ResuseableBackground";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import packageimage from "../../assets/Images/package.5fa7b18c.png"
import ExploarDestination from "../../Sections/DstnSection/Destination";
const AllPackagePage = () => {
  // const visaData = useSelector((state) => state.data.data);
  return (
    <Box>
      <Box>
        <ReuseableBackground
          head={"Packages"}
          body={"Explore trending destinations"}
          bgImage={packageimage}
        />
      </Box>
      <Box className="DestinationContainer">
        {/* Expolation Section  Start */}
        {/* <Box p={1}>
          {" "}
          <AllCategoryButton />
        </Box> */}
        <ExploarDestination/>
        {/* End Pont of Button section */}
        {/* <Box
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
          {visaData.map((data, index) => {
            return (
              <Box key={index}>
                <VisaCard data={data} />
              </Box>
            );
          })}
        </Box> */}
      </Box>
    </Box>
  );
};
export default AllPackagePage;
