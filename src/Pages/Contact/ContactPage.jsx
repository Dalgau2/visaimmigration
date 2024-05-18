import { Box, Paper, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import ReuseableBackground from "../../ResuseableBackground";
import contactImage from "../../assets/Images/contactus.cc92a610.png";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from '@mui/material';
import "./ContactStyle.css"
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
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box p={2}>
          <Box sx={{ width: "500px" }}>
            <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
              Let's get in touch
            </Typography>
            <Typography sx={{ color: "grey" }}>
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
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  Punjab | India
                </Typography>
                <Typography>563########*************</Typography>
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
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  Mail
                </Typography>
                <Typography>gm**********@gmail.com</Typography>
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
              <Box>
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
            width: "600px",
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component={Paper}
            elevation={4}
            sx={{
              width: "550px",
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
                "& > :not(style)": { mb: 1, width: "50ch" },
              }}
            >
                <Typography>Your name</Typography>
                <TextField></TextField>
                <Typography>Your Email</Typography>
                <TextField></TextField>
                <Typography>Your query or message</Typography>
                <TextField multiline rows={5}/>
                
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ContactPageOfImmigration;
