import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
const MyRating = ({size}) => {
  return (
    <Stack spacing={1}>
      <Rating
        sx={{ fontSize:{xs:"40px",sm:"50px",lg:`${size}px`} }}
        name="half-rating-read"
        defaultValue={5}
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 1.55 }} fontSize="inherit" />}
      />
    </Stack>
  );
};
export default MyRating;
