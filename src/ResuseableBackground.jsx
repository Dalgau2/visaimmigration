import { Box, Typography } from "@mui/material";
const ReuseableBackground = ({head,body,bgImage}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: {xs:"200px",lg:"400px"},
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background:`linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 84.5%), url(${bgImage})`,
        backgroundPosition:"center 0px",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
       
      }}
    >
     <Typography  sx={{fontSize:{xs:"18px",lg:"70px",sm:"48px"},color:"white",fontFamily:"cential",fontWeight:"400"}}>{head}</Typography>
     <Typography variant="h6" sx={{color:"#F8AD0f",fontSize:{xs:"16px",sm:"30px"}}}>{body}</Typography>
    </Box>
  );
};
export default ReuseableBackground;
