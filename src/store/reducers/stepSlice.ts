import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { baseAPI } from '../../services/baseAPI';
import { STEPS_CODE } from '../../constants/steps';

export interface StepState {
    step: number;
    isError: boolean;
    errorCode: number;
}

const initialState: StepState = {
    step: 0,
    isError: false,
    errorCode: 0,
};

export const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(baseAPI.endpoints.getStatus.matchFulfilled, (state, { payload }) => {
            const data = payload as unknown as { data: { code: number } };
            state.step = STEPS_CODE[data?.data.code as keyof typeof STEPS_CODE] || 0;
        });
    },
});

export const { setStep } = stepSlice.actions;

export default stepSlice.reducer;
