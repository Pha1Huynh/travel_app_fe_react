import { combineReducers } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from '../reducers/authReducer';
import { userReducer } from '../reducers/userReducer';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
};

const userPersistConfig = {
  key: 'user',
  storage: storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
export const rootReducer = combineReducers({
  user: persistedUserReducer,
  auth: persistedAuthReducer,
});
