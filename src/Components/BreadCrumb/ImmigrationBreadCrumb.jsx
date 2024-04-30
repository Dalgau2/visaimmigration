import { Box } from "@mui/material";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
const ImmigrationBreadCrumb = () => {
  return (
    <Breadcrumbs separator={<Typography fontSize="1.7rem" color="#F9C018">›</Typography>}  >
      <Link underline="none" sx={{color:"white"}} href="/">Home</Link>
      <Typography sx={{color:"white"}} >Packages</Typography>
    </Breadcrumbs>
  );
};
export default ImmigrationBreadCrumb;
