import { Box, Paper, Typography } from "@mui/material"
import ReuseableBackground from "../../ResuseableBackground"
import servicesImage from "../../assets/Images/services.88643e06.png"
import visaapplyimage from "../../assets/Images/visaapply.webp"
import flightbooking from "../../assets/Images/flightbook.webp"
const OurServicesPage=()=>{
return(
    <Box>
       <Box> <ReuseableBackground head={"Our Services"} body={"Streamlined services for your ease"} bgImage={servicesImage} /></Box>
       <Box className="serviceContainer" sx={{backgroundColor:"#FDD300"}}>
        {/* first Section of Service start */}
        <Box  sx={{display:"flex"}}>
            <Box p={4}sx={{width:"50%",paddingTop:"90px"}}>
                <Typography variant="h2" sx={{fontWeight:"700",fontSize:"70px"}}>Visa Application</Typography>
                <Typography pt={3}>Navigating the complexities of visa applications can be daunting, but our visa application service simplifies the process for you. Our experienced team guides you through the necessary paperwork, requirements, and procedures, making the journey toward obtaining your visa as seamless as possible. From visa consultation to document preparation, we're committed to helping you secure the necessary approvals for your international travels, allowing you to focus on the excitement of your upcoming adventure.</Typography>
            </Box>
            <Box className="imagePOfservice" sx={{width:"50%",display:"flex",justifyContent:"center",alignItems:"center",height:"500px"}}>
                {/* FirstRing */}
               <Box component={Paper} elevation={3} sx={{width:"480px",height:"480px",borderRadius:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
                {/* SecondRing */}
                <Box sx={{width:"470px",height:"470px",borderRadius:"100%"}}>
                    <img src={visaapplyimage} alt="visa apply" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"100%"}}/>
                </Box>
               </Box>
            </Box>
        </Box>
        {/* End */}
        {/* Second Section Start */}
        <Box  sx={{display:"flex"}}>
            <Box className="imagePOfservice" sx={{width:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                {/* FirstRing */}
                <Box component={Paper} elevation={3} sx={{width:"480px",height:"480px",borderRadius:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
                {/* SecondRing */}
                <Box sx={{width:"470px",height:"470px",borderRadius:"100%"}}>
                    <img src={flightbooking} alt="visa apply" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"100%"}}/>
                </Box>
               </Box>
            </Box>
            <Box p={4}sx={{width:"50%",height:"500px",paddingTop:"90px"}}>
                <Typography variant="h2" sx={{fontWeight:"700",fontSize:"70px"}}>Flight Booking</Typography>
                <Typography pt={3}>Our flight booking service offers a hassle-free experience for travelers seeking to explore destinations around the globe. With access to a vast network of airlines and destinations, we provide personalized assistance to find the best flight options tailored to your preferences and budget. Whether it's a spontaneous getaway or a meticulously planned journey, we're here to ensure that your travel plans take off smoothly.</Typography>
            </Box>
        </Box>
        {/* End */}
       </Box>
    </Box>
)
}
export default OurServicesPage