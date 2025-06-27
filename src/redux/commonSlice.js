import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isMicro:false,
  microId:null,
  isModalShow:false,
  isDeleteConfirm:false,
  deleteId:null,
}

const commonSlice = createSlice({
  name:"microSlice",
  initialState,
  reducers:{
    setCommonState:(state, action)=>{
      state.microId = action.payload.id;
      state.isMicro = action.payload.isMicro
    },
    toggleModal:(state, action)=>{
      state.isModalShow = action.payload;
      // state.deleteId = action.payload.deleteId;
    },
    setModalHide:(state, action)=>{
      state.isModalShow = false
    },
    setDeleteConfirm:(state, action)=>{
      state.isDeleteConfirm = action.payload
    },
    setDeleteId:(state, action)=>{
      state.deleteId = action.payload;
    }
  },
})

export const {setCommonState, toggleModal, setModalHide, setDeleteConfirm, setDeleteId} = commonSlice.actions;

export default commonSlice.reducer;