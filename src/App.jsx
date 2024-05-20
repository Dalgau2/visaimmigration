import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LayoutOfImmigration from "./Components/LayOut/layout";
import HomePageForImmigration from "./Pages/HomePage/Homepage";
import PackagePageOfImmigration from "./Pages/Package/Packages";
import { setData } from "./StoreForImmigration/store";
import dataOfImmigration from "./Components/DataOfImmigration/immigration.json";
import AllPackagePage from "./Pages/AllPackage/AllPackagePage";
import OurServicesPage from "./Pages/Services/OurServices";
import ContactPageOfImmigration from "./Pages/Contact/ContactPage";
import AboutPage from "./Pages/About/AboutPage";
import DashBoardLayout from "./Dashboard/layoutOfDashBoard/DashboardLayout";
import DashboardPage from "./Dashboard/DashboardNavBar/DasboardPage";
import ApplicationPage from "./Dashboard/DashboardNavBar/dashPages/ApplicationPage";
import ApplyNew from "./Dashboard/DashboardNavBar/dashPages/apply";
import SupportPage from "./Dashboard/DashboardNavBar/dashPages/SupportPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(setData(dataOfImmigration));
    } catch {
      console.log("error");
    }
    // console.log("outover");
  }, []);
  const haveData = useSelector((state) => state.data.data);
  // console.log("data", haveData);
  return (
    <>
      {haveData && haveData.length >= 0 ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutOfImmigration />}>
              <Route index element={<HomePageForImmigration />} />
              <Route path="/packages" element={<AllPackagePage />} />
              <Route
                path="/packages/:id"
                element={<PackagePageOfImmigration />}
              />
              <Route path="/services" element={<OurServicesPage />} />
              <Route path="/contact" element={<ContactPageOfImmigration />} />
              <Route path="/about" element={<AboutPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default App;
