import {
    Avatar,
    Box,
    Card,
    CardContent,
    Typography,
    Paper,
  } from "@mui/material";
  import { BiSolidQuoteAltRight } from "react-icons/bi";
  import MyRating from "../../Rating/Rating";
const ReviewCardOfImmigration=()=>{
    return(
        <Card
        sx={{
          maxWidth:"100%",
          height:"100%",
          borderRadius: {xs:"5px",lg:"16px"},
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          backgroundColor:"black"
        }}
      >
        <Box p={1} m={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box>
              <BiSolidQuoteAltRight
                style={{ fontSize: {xs:"10px",lg:"40px"}, color: "#FDD300" }}
              />
            </Box>
            <CardContent
              sx={{
                // display: "flex",
                height: "150px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "juana",
                  fontWeight: "400",
                  // fontSize:{xs:"10px",lg:"22px"},
                  fontSize:"3px",
                  color: "black",
                  textAlign: "center",
                  color:"white",
                  backgroundColor:"white"
                }}
              >
                This impressive
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
              }}
            >
              <Box>
                <BiSolidQuoteAltRight
                  style={{ fontSize: "40px", color: "#FDD300" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Avatar sx={{ width: "50px", height: "50px" }}>
              helo
            </Avatar>
            <Typography sx={{ color: "grey", fontSize: "25px" }}>
              - Gautam
            </Typography>
          </Box>

          <Box></Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "50px",
              alignItems: "center",
            }}
          >
            <MyRating size={35} />
          </Box>
        </Box>
      </Card>
    )
}
export default ReviewCardOfImmigration