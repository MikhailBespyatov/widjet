import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialData, initialErrors } from '../../pages/Payments/constants';

export interface LinkCardState {
    data: typeof initialData;
    errors: typeof initialErrors;
}

const initialState: LinkCardState = {
    data: initialData,
    errors: initialErrors,
};

export const linkCardSlice = createSlice({
    name: 'linkCard',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<typeof initialData>) => {
            state.data = action.payload;
        },
        setErrors: (state, action: PayloadAction<typeof initialErrors>) => {
            state.errors = action.payload;
        },
    },
});

export const { setData, setErrors } = linkCardSlice.actions;

export default linkCardSlice.reducer;
