import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { baseAPI } from '../../services/baseAPI';
import { STEPS_CODE } from '../../constants/steps';

export interface DuplicatePreappId {
    duplicatePreappId: string;
}

const initialState: DuplicatePreappId = {
    duplicatePreappId: '',
};

export const duplicatePreappIdSlice = createSlice({
    name: 'duplicatePreappId',
    initialState,
    reducers: {
        setDuplicatePreappId: (state, action: PayloadAction<string>) => {
            state.duplicatePreappId = action.payload;
        },
    },
});

export const { setDuplicatePreappId } = duplicatePreappIdSlice.actions;

export default duplicatePreappIdSlice.reducer;
