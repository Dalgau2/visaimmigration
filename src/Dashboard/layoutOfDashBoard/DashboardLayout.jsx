import { Box } from "@mui/material"
import AsideBarOfDashboard from "../asideBar"
import NavBarOfDashboard from "../DashboardNavBar/NavBarOfDashboard"
const DashBoardLayout=()=>{
    return(
       <Box sx={{display:"flex"}}>
        <aside style={{width:"19%",height:"100vh",border:"1px solid black" ,backgroundColor:"#1c1c1c",color:"white"}}>
          <AsideBarOfDashboard/>
        </aside>
        <Box sx={{width:"80%",backgroundColor:"#f5f5f5"}}>
            <Box ><NavBarOfDashboard/></Box>
            <Box sx={{marginTop:"3px"}}>Outlet</Box>
        </Box>
       </Box>
    )
}
export default DashBoardLayout