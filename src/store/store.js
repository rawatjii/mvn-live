import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from '../redux/adminSidebarSlice';
import blogsReducer from '../redux/blogsSlice';

const store = configureStore({
  reducer:{
    adminSideMenu:sideMenuReducer,
    blogs: blogsReducer
  }
})

export default store;