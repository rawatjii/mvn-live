import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sideMenuReducer from '../redux/adminSidebarSlice';
import blogsReducer from '../redux/blogsSlice';
import commonReducer from '../redux/commonSlice';
import bannerReducer from '../redux/bannerSlice';
import projectReducer from '../redux/projectDataSlice';
import sectionReducer from '../redux/sectionDataSlice';
import homeReducer from '../redux/homepageSlice';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['banner', 'section'],
  transforms: [
    {
      in: (state) => ({
        ...state,
        banner: {
          ...state.banner,
          loading: false,
          error: null,
        },
        section: {
          ...state.sectionData,
          loading: false,
          error: null,
        },
      }),
      out: (state) => state,
    },
  ],
};

const persistedBannerReducer = persistReducer(persistConfig, bannerReducer);
const persistedSectionReducer = persistReducer(persistConfig, sectionReducer);

const store = configureStore({
  reducer: {
    adminSideMenu: sideMenuReducer,
    blogs: blogsReducer,
    commonState: commonReducer,
    banner: persistedBannerReducer,
    project: projectReducer,
    home: homeReducer,
    section: persistedSectionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['banner.error', 'section.error'], 
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
export default store;