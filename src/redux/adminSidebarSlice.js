import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAscending:true,
  toggleCount:[0, 1, 2],
  currentMenuCount:1,
  currentPage:null
}

const sideMenuSlice = createSlice({
  name:'adminSidebar',
  initialState,
  reducers:{
    toggleMenuCount:(state, action)=>{
      state.currentMenuCount = action.payload;
    },
    setCurrentPage:(state, action)=>{
      state.currentPage = action.payload
    },
    shortCount:(state)=>{
      state.toggleCount = [0, 1]
    },
    normalCount:(state)=>{
      state.toggleCount = [0, 1, 2]
    },
    toggleAscending:(state)=>{
      state.isAscending=!state.isAscending
    }
  }
})

export const {toggleMenuCount, setCurrentPage, shortCount, normalCount, toggleAscending} = sideMenuSlice.actions

export default sideMenuSlice.reducer;