import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { baseAPI } from '../../services/baseAPI';
import { validationErrorCode } from '../../constants/validationErrorCode';

export interface ErrorState {
    isError: boolean;
    errorCode: number;
}

const initialState: ErrorState = {
    isError: false,
    errorCode: 0,
};

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<boolean>) => {
            state.isError = action.payload;
        },
    },
    extraReducers: (builder) => {
        const matches = Object.keys(baseAPI.endpoints);
        matches.forEach((key) => {
            builder.addMatcher(
                baseAPI.endpoints[key as keyof typeof baseAPI.endpoints].matchRejected,
                (state, { payload }) => {
                    const error = payload as unknown as { data: { error: { code: number } } };
                    state.errorCode = error?.data.error.code || 0;
                    if (error && !validationErrorCode.includes(error.data.error.code)) {
                        state.isError = Boolean(payload);
                    }
                },
            );
        });
    },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
