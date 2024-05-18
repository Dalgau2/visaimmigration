import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./VisaCardStyle.css";
import { useNavigate } from "react-router";
const VisaCard = ({ data }) => {
  const {title, country, price_per_person, visa_delivery_in_days, id,image } =data;
// nvigate to pakgesection
const navigate=useNavigate()

  const handelClick = (id) => {
    navigate(`/packages/${id}`)
  };
  return (
    <div className="VisaCard active">
      <Card
        component={Paper}
        elevation={4}
        sx={{
          maxWidth: { xl: "400px", lg: "300px" },
          height: {
            xl: "400px",
            lg: "340px",
            sm: "340px",
            md: "340px",
            xs: "340px",
            margin: "10px",
          },
          borderRadius: "20px",
        }}
      >
        <Box p={0.5}>
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt="Paella dish"
            sx={{ borderRadius: "16px" }}
          />
          <Box sx={{ marginTop: "10px" }}>
            <Typography sx={{ fontWeight: "700" }}>{country}</Typography>
            <Typography>
              Get on{" "}
              <span style={{ color: "red" }}>{visa_delivery_in_days}</span>
            </Typography>
            <Box display="flex">
              <span>
                <FlightTakeoffIcon />
              </span>
              <Typography variant="body1" sx={{ paddingRight: "1px" }}>
                4 Direct Flight
              </Typography>
            </Box>
          </Box>
        </Box>
        <CardActions sx={{ padding: "0px" }}>
          <Button
            onClick={()=>handelClick(id)}
            className="ButtonForStart active"
            variant="contained"
            sx={{
              width: "100%",
              borderRadius: "0px",
              height: "60px",
              display: "flex",
              justifyContent: "space-between",
              textTransform: "none",
              backgroundColor: "white",
              fontSize: "14px",
              fontWeight: "400",
              borderTop: "2px dashed gray",
            }}
          >
            <Typography variant="body3" sx={{ color: "gray" }}>
              Start at
            </Typography>
            <Typography
              variant="body3"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <CurrencyRupeeIcon sx={{ fontSize: "20px" }} />
              {price_per_person}
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default VisaCard;
