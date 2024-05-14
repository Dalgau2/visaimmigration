import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LayoutOfImmigration from "./Components/LayOut/layout";
import HomePageForImmigration from "./Pages/HomePage/Homepage";
import PackagePageOfImmigration from "./Pages/Package/Packages";
import { setData } from "./StoreForImmigration/store";
import dataOfImmigration from "./Components/DataOfImmigration/immigration.json";

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
              <Route path="/:id" element={<PackagePageOfImmigration />} />
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
