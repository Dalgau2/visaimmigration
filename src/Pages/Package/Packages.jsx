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
const PackagePageOfImmigration = () => {
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
                height: "400px",
                borderRadius: "20px",
              }}
            >
              <img
                src={pic}
                alt=""
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
              Australiya
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
                16 May 2024 at 16:19 PM
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
                  width: "300px",
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
                sx={{ width: "300px", display: "flex", color: "#F9C018" }}
              >
                <Box sx={{ marginTop: "3px" }}>
                  <CalendarMonthOutlinedIcon sx={{ color: "#F9C018" }} />
                </Box>
                30
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
                  width: "300px",
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
                  width: "300px",
                  display: "flex",
                  color: "#F9C018",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <Box>
                  <EmojiPeopleOutlinedIcon />
                </Box>
                Tourist Entry
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
          <Box className="startApplicationCard">
            <Box
              sx={{
                height: "115px",
                borderTopRightRadius: "inherit",
                borderTopLeftRadius: "inherit",
                backgroundColor: "#F9C018",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>hello</Typography>
            </Box>
            <Box
              sx={{
                height: "251px",
                backdropFilter: "blur(25px) saturate(180%)",
                backgroundColor: "rgba(255, 255, 255, 0.37)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "70px",
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
                  25 May 2024 at 9:45 AM
                </Box>
              </Box>
              <Box
                pl={2}
                pr={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "170px",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>Travler</Box>
                  <Box>1</Box>
                </Box>
                <hr />
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "700" }} mt={1}>
                    Price
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Visa Fee</Typography>
                  <Typography>INR 250000 X 1</Typography>
                </Box>
                <hr />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h6" sx={{ fontWeight: "500" }}>
                    Total Amount
                  </Typography>
                  <Typography>INR 2500000000</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                height: "90px",
                borderBottomLeftRadius: "inherit",
                borderBottomRightRadius: "inherit",
                backgroundColor: "#F9C018",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Button
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default PackagePageOfImmigration;
