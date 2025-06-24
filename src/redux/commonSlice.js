import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isMicro:false,
  microId:null,
  isModalShow:false,
}

const commonSlice = createSlice({
  name:"microSlice",
  initialState,
  reducers:{
    setCommonState:(state, action)=>{
      state.microId = action.payload.id,
      state.isMicro = action.payload.isMicro
    },
    setModalShow:(state, action)=>{
      state.isModalShow = true
    },
    setModalHide:(state, action)=>{
      state.isModalShow = false
    }
  },
})

export const {setCommonState, setModalShow, setModalHide} = commonSlice.actions;

export default commonSlice.reducer;