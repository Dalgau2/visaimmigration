import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { dataReducer, setData } from "./Slice/immigrationSlice";

const rootReducer = combineReducers({
  data: dataReducer,
});
const store = configureStore({
  reducer: rootReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export { store, setData };

