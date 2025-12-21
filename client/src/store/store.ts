import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import locationReducer from 'src/slicies/location-slice/location-slice';
import { apiPartners } from 'src/api-query/api-partners';
import addPartnerReducer from 'src/slicies/add-partner-slice/add-partner-slice';
// import userRegisterReducer from 'src/slicies/user-auth-slice/user-register-slice';
// import newPartnerReducer from 'src/slicies/new-partners-slice/new-partners-slice';
// import partnersListReducer from 'src/slicies/partners-list-slice/partners-list-slice';
// import partnerUpdateReducer from 'src/slicies/partner-update-slice/partner-update-slice';

const rootReducer = combineReducers({
  location: locationReducer,
  addPartner: addPartnerReducer,
  [apiPartners.reducerPath]: apiPartners.reducer,
  // userRegister: userRegisterReducer,
  // newPartner: newPartnerReducer,
  // partnersList: partnersListReducer,
  // partnerUpdate: partnerUpdateReducer,  
  // userStatus: userStatusReducer,
  });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPartners.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;