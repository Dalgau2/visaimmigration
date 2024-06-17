import { Box, Typography } from "@mui/material";
import AchivementCard from "../../Components/CardComponent/AchivementCard";
import data from "../../Components/ImmigrationNav/NavOption.json";
const AchivementCardList = () => {
  return (
    <Box
      sx={{
        display:{xs:"flex",sm:"grid",md:"grid",lg:"grid",xl:"flex"},
        flexDirection:{xs:"column",xl:"row"},
        gridTemplateColumns:{sm:`repeat(2,0.3fr)`,md:`repeat(3,0.3fr)`,lg:`repeat(4,0.3fr)`,xl:`repeat(7,0.3fr)`},
        gap: "12px",
        justifyContent:"center",
        justifyItems:"center",
        alignItems: "center",
    
      }}
    >
      {data.map((d) => {
        return (
          <Box key={d.id}>
            <AchivementCard data={d} />
          </Box>
        );
      })}
    </Box>
  );
};
export default AchivementCardList;
