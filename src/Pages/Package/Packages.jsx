import { Box, Paper, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import "../Package/styleOfPackage.css";
import pic from "../../assets/Images/packageback.a9ad0eb3 (1).jpeg";
import ImmigrationBreadCrumb from "../../Components/BreadCrumb/ImmigrationBreadCrumb";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PackagePageOfImmigration = () => {
  // Getting Value (DynamicId) by using  UsePrams
  const { id } = useParams();
const data=useSelector((state)=>{
  const vista=state.data.data
  const filterData=vista.find((d)=>d.id===id)
  return filterData
})
const{title,country,price_per_person,visa_additional_details,visa_delivery_in_days,validity_period_in_days,image}=data
  return (
    <Box className="PackageSection">
      <Box className="breadCrumpOfPackage">
        <ImmigrationBreadCrumb />
      </Box>
      <Box className="containerOfPackage">
        <Box className="containerOfPackageDetail">
          <Box>
            <Box
              component={Paper}
              sx={{
                width: "100%",
                height: { xs: "170px", sm: "260px", lg: "400px" },
                borderRadius: "20px",
              }}
            >
              <img
                src={image}
                alt={country}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </Box>
          </Box>

          <Box
            component={Paper}
            sx={{
              width: "100%",
              height: "130px",
              borderRadius: "20px",
              // border: "2px solid white",
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
              background: "#F9C018",
              marginTop: "19px",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: "48px",
                fontWeight: "700",
                color: "black",
              }}
            >
              {country}
              <Box>
                <Typography sx={{ display: "flex" }}>
                  <Box>
                    <LocationOnOutlinedIcon />
                  </Box>
                  {/* name of the  Countery */}
                  Nepal
                </Typography>
              </Box>
            </Typography>
          </Box>
          <Box
            component={Paper}
            sx={{
              width: "100%",
              height: "130px",
              borderRadius: "20px",
              // border: "2px solid white",
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
              paddingRight: "20px",
              background: "rgb(54, 44, 39)",
              marginTop: "19px",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "500", color: "White", marginBottom: "5px" }}
              >
                Apply now for guaranteed visa by
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "400", color: "White", display: "flex" }}
              >
                <Box
                  sx={{
                    marginTop: "3.2px",
                    marginRight: "5px",
                    color: "#F9C018",
                  }}
                >
                  <WatchLaterOutlinedIcon />{" "}
                </Box>
              {visa_delivery_in_days}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Box
              component={Paper}
              sx={{
                width: "49%",
                height: "130px",
                borderRadius: "20px",
                background: "rgb(54, 44, 39)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  width: { xs: "147px", lg: "300px" },
                  marginBottom: "10px",
                  color: "white",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                {" "}
                Validity period
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  width: { xs: "150px", lg: "300px" },
                  display: "flex",
                  color: "#F9C018",
                }}
              >
                <Box sx={{ marginTop: "3px" }}>
                  <CalendarMonthOutlinedIcon sx={{ color: "#F9C018" }} />
                </Box>
               {validity_period_in_days}
              </Typography>
            </Box>
            <Box
              component={Paper}
              sx={{
                width: "49%",
                height: "130px",
                borderRadius: "20px",
                background: "rgb(54, 44, 39)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  width: { xs: "150px", lg: "300px" },
                  fontWeight: "500",
                  fontSize: "22px",
                  marginBottom: "5px",
                }}
              >
                Entry
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  width: { xs: "150px", lg: "300px" },
                  display: "flex",
                  color: "#F9C018",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <Box>
                  <EmojiPeopleOutlinedIcon />
                </Box>
                {title}
              </Typography>
            </Box>
          </Box>
          <Box
            component={Paper}
            sx={{
              height: "80px",
              borderRadius: "10px",
              background: "#F9C018",
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <Typography
              sx={{ width: "100%", fontWeight: "700", fontSize: "25px" }}
            >
              Documents Required
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: "10px" }}>
            <Box
              component={Paper}
              sx={{
                background: "rgb(54, 44, 39)",
                width: "200px",
                marginRight: "10px",
                height: "200px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "white",
              }}
            >
              <Typography>Passport</Typography>
              <Box>
                <AirplaneTicketOutlinedIcon
                  sx={{ fontSize: "100px", color: "#F9C018" }}
                />
              </Box>
            </Box>
            <Box
              component={Paper}
              sx={{
                background: "rgb(54, 44, 39)",
                width: "200px",
                marginRight: "10px",
                height: "200px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "white",
              }}
            >
              <Typography>Photograph</Typography>
              <Box>
                <PortraitOutlinedIcon
                  sx={{ fontSize: "100px", color: "#F9C018" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          {/* Cart For the application */}
          <Box className="startApplicationCard" mt={{ xs: 1 }}>
            <Box
              sx={{
                height: { xs: "60px", lg: "115px" },
                borderTopRightRadius: "inherit",
                borderTopLeftRadius: "inherit",
                backgroundColor: "#F9C018",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                Start Application
              </Typography>
            </Box>
            <Box
              sx={{
                height: { xs: "180px", lg: "251px" },
                backdropFilter: "blur(25px) saturate(180%)",
                backgroundColor: "rgba(255, 255, 255, 0.37)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: { xs: "50px", lg: "70px" },
                }}
              >
                <Box
                  sx={{
                    width: "250px",
                    textAlign: "center",
                    height: "40px",
                    lineHeight: "40px",
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "rgb(54, 44, 39)",
                    fontWeight: "500",
                  }}
                >
                  {visa_delivery_in_days}
                </Box>
              </Box>
              <Box
                pl={2}
                pr={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: { xs: "120px", lg: "170px" },
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>Travler</Box>
                  <Box>1</Box>
                </Box>
                <hr />
                <Box>
                  <Typography
                    variant={"h4"}
                    sx={{ fontSize: { xs: "25px" }, fontWeight: "700" }}
                    mt={1}
                  >
                    Price
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Visa Fee</Typography>
                  <Typography>INR {price_per_person} X 1</Typography>
                </Box>
                <hr />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h6" sx={{ fontWeight: "500" }}>
                    Total Amount
                  </Typography>
                  <Typography>INR {price_per_person}</Typography>
                </Box>
              </Box>
            </Box>
           <Box
              sx={{
                height: { xs: "60px", lg: "90px" },
                borderBottomLeftRadius: "inherit",
                borderBottomRightRadius: "inherit",
                backgroundColor: "#F9C018",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/new-apply">
              Button
            </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default PackagePageOfImmigration;
