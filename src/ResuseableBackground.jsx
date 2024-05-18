import { Box, Typography } from "@mui/material";
const ReuseableBackground = ({head,body,bgImage}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background:`linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 84.5%), url(${bgImage})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
      }}
    >
     <Typography  sx={{fontSize:"70px",color:"white",fontFamily:"cential",fontWeight:"400"}}>{head}</Typography>
     <Typography variant="h6" sx={{color:"#F8AD0f"}}>{body}</Typography>
    </Box>
  );
};
export default ReuseableBackground;
