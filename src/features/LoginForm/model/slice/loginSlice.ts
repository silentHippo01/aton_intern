import { createSlice } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSсhema";
import { login } from "../services/login";


const initialState: LoginSchema = {
    username: '',
    email: '',
    password: '',
    isAuth: false,
    isLoading: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state) => {
            state.isLoading = false;
            state.isAuth = true;
        })
        builder.addCase(login.rejected, (state, action ) => {
            state.isLoading = false;
            // state.error = action.payload;
        })
    }
})

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;