import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface StepState {
    step: number;
}

const initialState: StepState = {
    step: 3,
};

export const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        },
    },
});

export const { setStep } = stepSlice.actions;

export default stepSlice.reducer;
