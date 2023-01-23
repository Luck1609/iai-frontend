import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./appReducer";

// const persistConfig = {
//   key: "auth",
//   storage,
//   stateReconciler: autoMergeLevel1,
//   whitelist: ['user']
// };


// const persistedReducer = persistCombineReducers(
//   persistConfig,
//   {
//     user: UserReducer,
//     modals: ModalReducer
//   }
// );

const store = configureStore({
  reducer: {app: AppReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});


export default store;
