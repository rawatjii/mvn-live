import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sideMenuReducer from '../redux/adminSidebarSlice';
import blogsReducer from '../redux/blogsSlice';
import commonReducer from '../redux/commonSlice';
import bannerReducer from '../redux/bannerSlice';
import projectReducer from '../redux/projectDataSlice';
import sectionReducer from '../redux/sectionDataSlice'; 
import homeReducer from "../redux/homepageSlice"
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['banner'], 
};

const persistedBannerReducer = persistReducer(persistConfig, bannerReducer);
const store = configureStore({
  reducer: {
    adminSideMenu: sideMenuReducer,
    blogs: blogsReducer,
    commonState: commonReducer,
    banner: persistedBannerReducer,
    project: projectReducer,
    home: homeReducer,
    section: sectionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
export default store;