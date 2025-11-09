import { createSlice } from "@reduxjs/toolkit";
import { AppRouter } from "src/app/app-routes";


interface LocationState {
  pathName: string;
}

const initialState : LocationState = {
  pathName: AppRouter.Main
} 

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    changeLocation: (state, action) => {
      state.pathName = action.payload
    }
  }
})

export const {changeLocation} = locationSlice.actions;

export default locationSlice.reducer;

