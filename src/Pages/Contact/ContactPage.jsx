import { Box, Paper, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import ReuseableBackground from "../../ResuseableBackground";
import contactImage from "../../assets/Images/contactus.cc92a610.png";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/material";
import "./ContactStyle.css";
const ContactPageOfImmigration = () => {
  return (
    <Box sx={{ backgroundColor: "#FEC916" }}>
      <Box>
        <ReuseableBackground
          head={"Contact"}
          body={"Let's start a conversation"}
          bgImage={contactImage}
        />
      </Box>
      <Box
        p={5}
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box p={2}>
          <Box sx={{ width: { xs: "200px", md: "500px" } }}>
            <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
              Let's get in touch
            </Typography>
            <Typography sx={{ fontSize: { xs: "18px" }, color: "grey" }}>
              We are here to help and answer any question you might have. We
              look forward to hearing from you.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "300px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocationOnIcon sx={{ fontSize: "40px" }} />
              </Box>
              <Box sx={{ width: { xs: "160px" } }}>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  Punjab | India
                </Typography>
                <Typography>563000000000</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MailIcon sx={{ fontSize: "40px" }} />
              </Box>
              <Box sx={{ width: { xs: "160px" } }}>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  Mail
                </Typography>
                <Typography>gm****@gmail.com</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CallIcon sx={{ fontSize: "40px" }} />
              </Box>
              <Box sx={{ width: { xs: "160px" } }}>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  Call at
                </Typography>
                <Typography>000008877</Typography>
                <Typography>**0008877</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width:{xs:"100%",md:"480px",lg:"600px"} ,
            height: {xs:"500px",md:"500px"},
            display: {xs:"block",md:"flex"},
            justifyContent: "center",
            alignItems: "center",

          }}
        >
          <Box
            component={Paper}
            elevation={4}
            sx={{
              width: {xs:"100%",md:"480px",lg:"550px"},
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
         
            }}
          >
            <Box
              component="form"
              sx={{
                "& > :not(style)": { mb: 1, width: {xs:"23ch",md:"45ch",lg:"50ch"} },
              }}
            >
              <Typography>Your name</Typography>
              <TextField></TextField>
              <Typography>Your Email</Typography>
              <TextField></TextField>
              <Typography>Your query or message</Typography>
              <TextField multiline rows={5} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ContactPageOfImmigration;
