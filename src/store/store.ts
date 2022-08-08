import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseAPI } from 'services/baseAPI';
import stepReducer from './reducers/stepSlice';

const rootReducer = combineReducers({
    step: stepReducer,
    [baseAPI.reducerPath]: baseAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseAPI.middleware),
    });
};

export const store = setupStore();
export type RootState = ReturnType<typeof store.getState>;
