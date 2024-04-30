import { Box, Typography } from "@mui/material";
import AchivementCard from "../../Components/CardComponent/AchivementCard";
import data from "../../Components/ImmigrationNav/NavOption.json";
const AchivementCardList = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(4,0.3fr)`,
        gap: "12px",
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
