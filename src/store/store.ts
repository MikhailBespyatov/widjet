import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseAPI } from 'services/baseAPI';
import stepReducer from './reducers/stepSlice';
import errorReducer from './reducers/errorSlice';
import linkCardReducer from './reducers/linkCardSlice';

const rootReducer = combineReducers({
    step: stepReducer,
    error: errorReducer,
    linkCard: linkCardReducer,
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
