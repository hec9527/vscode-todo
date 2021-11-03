import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    sideBar: 300,
};

type Keys = keyof typeof initialState;

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setlayout(state, action: PayloadAction<{ key: Keys; value: typeof initialState[Keys] }>) {
            state[action.payload.key] = action.payload.value;
            return state;
        },
    },
});

export const { setlayout } = layoutSlice.actions;

export default layoutSlice.reducer;
