import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import ImmigrationBreadCrumb from "./Components/BreadCrumb/ImmigrationBreadCrumb.jsx";
import NavigationBar from "./Components/ImmigrationNav/NavBar.jsx";
import HomePageForImmigration from "./Pages/HomePage/Homepage.jsx";
import SearchBarForImmigration from "./Components/ReusebleSearchBar/searchBar.jsx";
import FooterOfImmigration from "./Sections/Footer/FooterSection.jsx";
import PartnerBrand from "./Sections/PartnerShip/PartnerShipSection.jsx";
import ExploarDestination from "./Sections/DstnSection/Destination.jsx";
import OurSuccessSection from "./Sections/Success/SuccessSection.jsx";
import OurReviewsSection from "./Sections/Review/ReviewSection.jsx";
import ReviewCardOfImmigration from "./Components/CardComponent/ReviewCard/ReviewCard.jsx";
import OurAchievements from "./Sections/Achievment/OurAchievmentSection.jsx";
import PackagePageOfImmigration from "./Pages/Package/Packages.jsx";
import { Provider } from "react-redux";
import {store} from "./StoreForImmigration/store.jsx"
export const theme = createTheme({
  palette: {
    primary: {
      main: "#FDD300",
      dark: "#f7a711",
      light: "#f73b11",
    },
  },
  typography: {
    fontFamily: "Poppins,juana,cential",
    color: "black",
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  
);
