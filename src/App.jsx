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
import ScrollToTop from "./windoeScrolTop";
import RouteOfDashboard from "./Dashboard/layoutOfDashBoard/RouteofDashboard";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(setData(dataOfImmigration));
    } catch {
      console.log("error");
    }
  }, []);
  const haveData = useSelector((state) => state.data.data);
  return (
    <>
      {haveData && haveData.length >= 0 ? (
        <BrowserRouter>
          <ScrollToTop>
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
              {/* <Route path="/*" element={<RouteOfDashboard />} /> */}
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default App;
