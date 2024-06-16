import { Box, Card, CardContent, Typography } from "@mui/material";
import SwiperCardForImmigration from "../../Components/CardComponent/CardForSwiper";
import HistoryIcon from "@mui/icons-material/History";
import SnoozeIcon from "@mui/icons-material/Snooze";
import TaskIcon from "@mui/icons-material/Task";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
const statusCard = [
  {
    id: "1",
    status: "incomplete",
    colorcode: "#a8a8a8b5",
    icon: <HistoryIcon />,
  },
  { id: "2", status: "Pending", colorcode: "#fffa77b5", icon: <SnoozeIcon /> },
  { id: "3", status: "Accept", colorcode: "#aaff82b5", icon: <TaskIcon /> },
  {
    id: "4",
    status: "Reject",
    colorcode: "#ffa8a8b5",
    icon: <DoDisturbAltIcon />,
  },
];
const Dashboard = () => {
  return (
    <Box sx={{backgroundColor:"black",width:"100%",padding:"0px",margin:"0px"}}>
      <Box>
        <Typography variant="h5">Your Application</Typography>
      </Box>
      <Box>
        {" "}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            justifyItems: "center",
          }}
        >
          {statusCard.map((data, index) => {
            return (
              <Card
                elevation={5}
                sx={{
                  width: "240px",
                  height: "130px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "170px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ height: "80px" }}>
                    <Typography>{data.status}</Typography>
                    <Typography variant="h4" mt={1}>
                      {data.id}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "40px",
                      height: "80px",
                      border: "0px solid black",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: `${data.colorcode}`,
                    }}
                  >
                    {data.icon}
                  </Box>
                </Box>
              </Card>
            );
          })}
        </Box>
      </Box>
      <Box> stsatus section</Box>
      <Box>
        {statusCard.map((d, index) => {
          return (
            <Box>
              <SwiperCardForImmigration />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default Dashboard;
