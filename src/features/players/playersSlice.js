import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    player: {}
}

const playersSlice = createSlice({
    name: "single",
    initialState,
    reducers: {
        get: (state, action) => {
            state.player = action.payload;
        }

    }
})

export const get = playersSlice.action

export const selectPlayer = (state) => state.single.player;

export default playersSlice.reducer;