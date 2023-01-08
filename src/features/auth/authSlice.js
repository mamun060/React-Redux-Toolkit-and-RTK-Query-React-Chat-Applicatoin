import { createSlice } from "@reduxjs/toolkit";


// initialState here
const initialState = {
    accessToken: undefined,
    user: undefined
}

// create slice

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user =  action.payload.user; 
        },
        userLoggedOut: (state, action) => {
            state.accessToken = undefined;
            state.user = undefined
        },
    }
});


export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;