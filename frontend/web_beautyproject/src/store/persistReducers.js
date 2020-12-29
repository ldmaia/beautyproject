import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'beautyproject',
    storage,
    timeout: 0,
    whistelist: ['auth','user'],
  },
  reducers
  );
  return persistedReducer;
}
