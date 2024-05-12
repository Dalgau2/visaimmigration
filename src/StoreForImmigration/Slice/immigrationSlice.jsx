import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:"data",
    initialState:{
        data:[]
    },
    reducers:{
        setData(state,action){
            state.data=action.payload
        }
    }
})
// console.log(dataSlice)
export const {setData}=dataSlice.actions
export const dataReducer=dataSlice.reducer