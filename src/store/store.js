import { configureStore } from '@reduxjs/toolkit';
import sideMenuReducer from '../redux/adminSidebarSlice';
import blogsReducer from '../redux/blogsSlice';
import commonReducer from '../redux/commonSlice';
import bannerReducer from '../redux/bannerSlice';
import projectReducer from '../redux/projectDataSlice';
import sectionReducer from '../redux/sectionDataSlice';
import homeReducer from '../redux/homepageSlice';

const store = configureStore({
  reducer: {
    adminSideMenu: sideMenuReducer,
    blogs: blogsReducer,
    commonState: commonReducer,
    banner: bannerReducer,
    project: projectReducer,
    home: homeReducer,
    section: sectionReducer,
    // layout: layoutReducer
  },
});

export default store;