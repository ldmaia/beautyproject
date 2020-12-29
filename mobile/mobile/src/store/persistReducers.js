import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'beautyproject',
    storage: AsyncStorage,
    timeout: 0,
    whistelist: ['auth','user'],
  },
  reducers
  );
  return persistedReducer;
}
