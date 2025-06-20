import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isMicro:false,
  microId:null,
}

const commonSlice = createSlice({
  name:"microSlice",
  initialState,
  reducers:{
    setCommonState:(state, action)=>{
      state.microId = action.payload.id,
      state.isMicro = action.payload.isMicro
    }
  },
})

export const {setCommonState} = commonSlice.actions;

export default commonSlice.reducer;