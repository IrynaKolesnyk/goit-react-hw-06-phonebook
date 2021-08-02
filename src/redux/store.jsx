import { configureStore } from '@reduxjs/toolkit';
import phoneBookReducer from './phoneBook/phoneBookReducer';

const store = configureStore({
  reducer: { contacts: phoneBookReducer },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

// import phoneBookReducer from './phoneBook/phoneBookReducer';

// const rootReduser = combineReducers({
//   contacts: phoneBookReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReduser);

// const persistor = persistStore(store);

// export default { store, persistor };

// // import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// // import logger from 'redux-logger';

// // const middleware = [...getDefaultMiddleware(), logger];

// // const store = configureStore({
// //   //   reducer: { contacts: phoneBookReducer },
// //   middleware,
// //   devTools: process.env.NODE_ENV === 'development',
// // });

// // export default store;

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGEPURGE,
//   REGISTER,
// } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// };
