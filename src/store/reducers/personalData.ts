import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PersonalDataState {
    iin: string;
    phoneNumber: string;
}

const initialState: PersonalDataState = {
    iin: '',
    phoneNumber: '',
};

export const personalDataSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        setIin: (state, action: PayloadAction<string>) => {
            state.iin = action.payload;
        },
        setPhoneNumber: (state, action: PayloadAction<string>) => {
            state.phoneNumber = action.payload;
        },
    },
});

export const { setPhoneNumber, setIin } = personalDataSlice.actions;

export default personalDataSlice.reducer;
