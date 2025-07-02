import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from '../redux/adminSidebarSlice';
import blogsReducer from '../redux/blogsSlice';
import commonReducer from '../redux/commonSlice'

const store = configureStore({
  reducer:{
    adminSideMenu:sideMenuReducer,
    blogs: blogsReducer,
    commonState:commonReducer,
  }
})

export default store;